import React, { Component, useEffect, useState } from "react";
import { images } from '../shared/categoryImages';
import ReactCardFlip from 'react-card-flip';
import { GameActions } from '../models/GameActions';
import { last } from "lodash";


interface Props {
    name: string;
    currentAction: GameActions;
    setCurrentAction: (value: GameActions) => void; 
    category: Category;
    audios: Array<string>;
    setAudios: (value: Array<string>) => void;
    setShuffledAudios: (value: Array<string>) => void;
    shuffledAudios: Array<string>
}

interface Cards {
    name: string;
    flipped: boolean;
}

interface Category {
    images: Array<string>; 
    category: string;
    rus: Array<string>;
  }

export const CategoryPage = ({ setCurrentAction, currentAction, category, audios, setAudios, shuffledAudios, setShuffledAudios }: Props) => {
    const [cards, setCards] = useState<Array<Cards>>([]);
    let failures: Array<string> = [];
    //const [shuffledAudios, setShuffledAudios] = useState<Array<string>>([]);

    useEffect(() => {
        if (category.images) {
            let cardObjects = Array.from(category.images).map(x => ({ name: x, flipped: false }));
            setCards(cardObjects)
        } 
    }, [category]);

    useEffect(() => {
        if (currentAction !== GameActions.Started) {
            let cardsDisabled = document.getElementsByClassName('guessed');
            Array.from(cardsDisabled).forEach(card => {
            card.classList.remove('guessed');
            }) 
        } 
    }, [currentAction])

    const handleFlip = (name: string, e: React.MouseEvent) => {
        if (localStorage.getItem('action') === GameActions.Train.toString()) {
            e.preventDefault();
            setCards(cards.map(x => {
            if (x.name === name) {
                x.flipped = !x.flipped;
            }
            return x;
        }));
        }
        return;
    };

    const sayWord = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.getItem('action') === (GameActions.Train).toString() 
        if ((e.target as HTMLElement).classList.value !== 'fas fa-redo-alt' && localStorage.getItem('action') === (GameActions.Train).toString()) {
            new Audio('/' + category.category + '/' + name + '.mp3').play();
        }
        else return;
    }

    // useEffect(() => {
    //     if (currentAction === GameActions.Started) {
    //         setShuffledAudios(audios.slice().sort(() => Math.random() - 0.5));
    //     }
    // }, [currentAction])


    useEffect(() => {
        async function playSound() {
            await new Audio(shuffledAudios[shuffledAudios.length - 1]).play()
        }
        playSound();
    }, [shuffledAudios])

    const guessWord = (name: string, e: React.MouseEvent) => {
        let lastShuffled = shuffledAudios[shuffledAudios.length - 1];
        if (currentAction === GameActions.Started) {
            if (lastShuffled.includes(name)) {
                document.getElementById(name)!.classList.add('guessed')
                shuffledAudios.pop();
                console.log(shuffledAudios)
                new Audio('/well-done.mp3').play();
                setTimeout(() => {
                    new Audio(lastShuffled).play();
                }, 2000)
                lastShuffled = shuffledAudios[shuffledAudios.length - 1];
            } else {
                new Audio('/error.mp3').play();
                failures.push('failure')
            }
            if (shuffledAudios.length === 0) {
                failures.length === 0 ? console.log('Good job!') : console.log('Work more!')
            }
        } 
    }

    return (
        <main>
            <h2>{category.category}</h2>
            <div className="main-wrapper">
            {
                cards.map((x, index) => 
                <div className='card-container' id={`${x.name}`}>
                <ReactCardFlip key={index} isFlipped={x.flipped} flipDirection="vertical">
                    <div className="pink-card" onClick={(e) => {
                        sayWord(x.name, e)
                        guessWord(x.name, e)
                    }}>
                        <img className={(currentAction).toString() !== GameActions.Train.toString() ? 'play-mode' : ''} 
                        src={'/' + category.category + '/' + x.name + '.png'} />
                        {
                            (currentAction).toString() === GameActions.Train.toString()  ?
                            <p className="word">{x.name}<span>
                                <i className="fas fa-redo-alt" onClick={(e) => handleFlip(x.name, e)}></i>
                                </span></p> :
                            ''
                        }
                    </div>
                    <div className="pink-card" onMouseLeave={(e) => handleFlip(x.name, e)}>
                        <img className={(currentAction).toString() !== GameActions.Train.toString() ? 'play-mode' : ''} src={'/' + category.category + '/' + x.name + '.png'} />
                        {
                            (currentAction).toString() === GameActions.Train.toString() ?
                            <p className="word">{category.rus[index]}<span><i className="fas fa-redo-alt"></i></span></p> :
                            ''
                        }
                    </div>
                </ReactCardFlip>
                </div>
                )
            }
            </div>
        </main>
    );
}