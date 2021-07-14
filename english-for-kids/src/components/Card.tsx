import ReactCardFlip from 'react-card-flip';
import { GameActions } from '../models/GameActions';
import { Category } from '../models/CategoryInterface';
import { Card } from '../models/CardInterface';

interface Props {
    category: Category;
    currentAction: GameActions;
    card: Card;
    index: number;
    choices: Array<boolean>
    setChoices: (value: Array<boolean>) => void;
    count: number;
    setCount: (value: number) => void;
    failures: number;
    setFailures: (value: number) => void;
    shuffledAudios: Array<string>;
}

export const CardItem = ({
    shuffledAudios,
    category,
    currentAction,
    card,
    index,
    choices,
    setChoices,
    count,
    setCount,
    failures,
    setFailures,
}: Props) => {
    const wordParams = {
        trained: 0,
        correct: 0,
        incorrect: 0,
        percentage: 0,
    };

    const changeWordParam = (name: string, param: number, p: string) => {
        if (!localStorage.getItem(name)) {
            param++;
            localStorage.setItem(name, JSON.stringify(wordParams));
        } else {
            const params = JSON.parse(localStorage.getItem(name)!);
            params[p]++;
            localStorage.setItem(name, JSON.stringify(params));
        }
    };

    const handleFlip = (name: string, e: React.MouseEvent) => {
        if (currentAction === GameActions.Train) {
            e.preventDefault();
            if (card.name === name) {
                card.flipped = !card.flipped;
            }
            return card;
        }
        return false;
    };

    const sayWord = (e: React.MouseEvent) => {
        e.preventDefault();
        if ((e.target as HTMLElement).classList.value !== 'fas fa-redo-alt' && currentAction === GameActions.Train) {
            new Audio(`/${category.category}/${card.name}.mp3`).play();
        }
        if (currentAction === GameActions.Train) {
            changeWordParam(card.name, wordParams.trained, 'trained');
        }
    };

    const chosenRight = (name: string) => {
        setChoices([...choices, true]);
        setCount(count + 1);
        changeWordParam(name, wordParams.incorrect, 'correct');
        new Audio('/well-done.mp3').play();
        if (card.name === name) {
            card.guessed = !card.guessed;
        }
        setTimeout(() => {
            new Audio(shuffledAudios[count + 1]).play();
        }, 2000);
    };

    const chosenWrong = (name: string) => {
        changeWordParam(name, wordParams.incorrect, 'incorrect');
        setChoices([...choices, false]);
        new Audio('/error.mp3').play();
        setFailures(failures + 1);
    };

    const guessWord = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentAction === GameActions.Started) {
            shuffledAudios[count].includes(card.name) ? chosenRight(card.name) : chosenWrong(card.name);
            if (shuffledAudios.slice(count).length - 1 === 0) {
                (failures === 0) ? new Audio('/success.wav').play() : new Audio('/failure.mp3').play();
                setTimeout(() => { window.location.pathname = '/'; }, 4000);
            }
        }
    };

    return (
        <ReactCardFlip key={Date().toLocaleString()} isFlipped={card.flipped} flipDirection='vertical'>
            <div className='pink-card' onClick={(e) => {
                sayWord(e);
                guessWord(e);
            }}>
                <img className={currentAction !== GameActions.Train ? 'play-mode' : ''}
                    src={`/${category.category}/${card.name}.png`} />
                {
                    currentAction === GameActions.Train
                        ? <p className='word'>{card.name}<span>
                            <i className='fas fa-redo-alt' onClick={(e) => handleFlip(card.name, e)}></i>
                        </span></p>
                        : ''
                }
            </div>
            <div className='pink-card' onMouseLeave={(e) => handleFlip(card.name, e)}>
                <img className={currentAction !== GameActions.Train
                    ? 'play-mode'
                    : ''}
                    src={`/${category.category}/${card.name}.png`} />
                {
                    currentAction === GameActions.Train
                        ? <p className='word'>{category.rus[index]}<span><i className='fas fa-redo-alt'></i></span></p>
                        : ''
                }
            </div>
        </ReactCardFlip>
    );
};
