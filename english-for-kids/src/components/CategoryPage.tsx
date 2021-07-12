import React, { useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { GameActions } from '../models/GameActions';
import { Rating } from "./Rating";


interface Props {
    name: string;
    currentAction: GameActions;
    category: Category;
    shuffledAudios: Array<string>
    count: number;
    setCount: (value: number) => void;
    failures: number;
    setFailures: (value: number) => void;
    choices: Array<boolean>
    setChoices: (value: Array<boolean>) => void;
}

interface Cards {
    name: string;
    flipped: boolean;
    guessed: boolean;
}

interface Category {
    images: Array<string>;
    category: string;
    rus: Array<string>;
}

export const CategoryPage = ({ setChoices, choices, currentAction, category, shuffledAudios, count, setCount, failures, setFailures }: Props) => {
    const [cards, setCards] = useState<Array<Cards>>([]);
    const wordParams = {
        trained: 0,
        correct: 0,
        incorrect: 0,
        percentage: 0
    }

    useEffect(() => {
        if (category.images) {
            let cardObjects = Array.from(category.images).map(x => ({ name: x, flipped: false, guessed: false }));
            setCards(cardObjects)
        }
        setChoices([]);
    }, [currentAction, location.pathname]);

    const handleFlip = (name: string, e: React.MouseEvent) => {
        if (currentAction === GameActions.Train) {
            e.preventDefault();
            setCards(cards.map(x => {
                if (x.name === name) {
                    x.flipped = !x.flipped;
                }
                return x;
            }));
        }
    };

    const changeWordParam = (name: string, param: number, p: string) => {
        if (!localStorage.getItem(name)) {
            param++;
            localStorage.setItem(name, JSON.stringify(wordParams))
        } else {
            let params = JSON.parse(localStorage.getItem(name)!);
            params[p]++;
            localStorage.setItem(name, JSON.stringify(params))
        }
    }

    const sayWord = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        if ((e.target as HTMLElement).classList.value !== 'fas fa-redo-alt' && currentAction === GameActions.Train) {
            new Audio('/' + category.category + '/' + name + '.mp3').play();
        }
        if (currentAction === GameActions.Train) {
            changeWordParam(name, wordParams.trained, 'trained')
        }
    }

    useEffect(() => {
        new Audio(shuffledAudios[count]).play();
    }, [shuffledAudios])

    const chosenRight = (name: string) => {
        setChoices([...choices, true]);
                setCount(count + 1);
                changeWordParam(name, wordParams.incorrect, 'correct')
                new Audio('/well-done.mp3').play();
                cards.map(x => {
                    if (x.name === name) {
                        x.guessed = !x.guessed;
                        console.log(x)
                    }
                })
                setTimeout(() => {
                    new Audio(shuffledAudios[count + 1]).play();
                }, 2000)
    }

    const chosenWrong = (name: string) => {
        changeWordParam(name, wordParams.incorrect, 'incorrect')
        setChoices([...choices, false]);
        new Audio('/error.mp3').play();
        setFailures(failures + 1);
    }

    const guessWord = (name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentAction === GameActions.Started) {
            shuffledAudios[count].includes(name) ? chosenRight(name) : chosenWrong(name);
            if (shuffledAudios.slice(count).length - 1 === 0) {
                (failures === 0) ? new Audio('/success.wav').play() : new Audio('/failure.mp3').play();
                setTimeout(() => { location.pathname = '/' }, 4000);
            }
        }
    }

    const gameOverView = () => <div className='overlay'>
        { failures === 0 ?
            <div className='overlay'><h2 className='win'>Success!</h2></div> :
            <div>
                <h2 className='loose'>Work more!</h2>
                <p>Number of mistakes: {failures}</p>
            </div>
        }
    </div>

    const playView = () => <div className="main-wrapper">
        {
            cards.map((x, index) =>
                <div className={(x.guessed === true) && currentAction === GameActions.Started ? 'card-container guessed' : 'card-container'} 
                id={`${x.name}`}
                onClick={(e) => {
                    sayWord(x.name, e)
                    guessWord(x.name, e)
                }}>
                    <ReactCardFlip key={index} isFlipped={x.flipped} flipDirection="vertical">
                        <div className="pink-card" id={`${x.name}`}>
                            <img className={currentAction !== GameActions.Train ? 'play-mode' : ''}
                                src={'/' + category.category + '/' + x.name + '.png'} />
                            {
                                currentAction === GameActions.Train ?
                                    <p className="word">{x.name}<span>
                                        <i className="fas fa-redo-alt" onClick={(e) => handleFlip(x.name, e)}></i>
                                    </span></p> :
                                    ''
                            }
                        </div>
                        <div className="pink-card" onMouseLeave={(e) => handleFlip(x.name, e)}>
                            <img className={currentAction !== GameActions.Train ? 'play-mode' : ''} src={'/' + category.category + '/' + x.name + '.png'} />
                            {
                                currentAction === GameActions.Train ?
                                    <p className="word">{category.rus[index]}<span><i className="fas fa-redo-alt"></i></span></p> :
                                    ''
                            }
                        </div>
                    </ReactCardFlip>
                </div>
            )
        }
    </div>

    return (
        <main>
            <h2>{category.category}</h2>
            <Rating
                choices={choices}
                currentAction={currentAction}
            /> 
            {(count === shuffledAudios.length && currentAction === GameActions.Started) ?
                gameOverView() : playView()
            }
        </main>
    );
}