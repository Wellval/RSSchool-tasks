import { useEffect, useRef, useState } from "react";
import { GameActions } from '../models/GameActions';
import { Rating } from "./Rating";
import { CardItem } from './Card';
import { Card } from '../models/CardInterface';
import { Category } from '../models/CategoryInterface';
import { LoginForm } from './LoginForm';


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
    loginForm: boolean;
    setLoginForm: (value: boolean) => void;
}


export const CategoryPage = ({ loginForm, setLoginForm, setChoices, choices, currentAction, category, shuffledAudios, count, setCount, failures, setFailures }: Props) => {
    const [cards, setCards] = useState<Array<Card>>([]);
    const wrapperRef = useRef<any>();
    const [token, setToken] = useState();

    // if(!token) {
    //     return <LoginForm setToken={setToken} />
    //   }


    const handleClickOutside = (e: Event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setLoginForm(false);
            console.log(loginForm)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    useEffect(() => {
        if (category.images) {
            let cardObjects = Array.from(category.images).map(x => ({ name: x, flipped: false, guessed: false }));
            setCards(cardObjects)
        }
        setChoices([]);
    }, [currentAction, location.pathname]);

    useEffect(() => {
        if (currentAction === GameActions.Started) {
            new Audio(shuffledAudios[count]).play();
        }
    }, [shuffledAudios])

    const gameOverView = () => <div className='overlay'>
        {failures === 0 ?
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
                    id={`${x.name}`}>
                    <CardItem
                        category={category}
                        currentAction={currentAction}
                        card={x}
                        index={index}
                        shuffledAudios={shuffledAudios}
                        failures={failures}
                        setFailures={setFailures}
                        choices={choices}
                        setChoices={setChoices}
                        count={count}
                        setCount={setCount}
                    />
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