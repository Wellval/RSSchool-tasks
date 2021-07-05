import React, { Component, useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import { GameActions } from '../models/GameActions';


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
    const ratingWrapper = document.querySelector('.rating');

    useEffect(() => {
        if (category.images) {
            let cardObjects = Array.from(category.images).map(x => ({ name: x, flipped: false }));
            setCards(cardObjects)
        } 
    }, [category]);

    useEffect(() => {
        if (currentAction !== GameActions.Started) {
            if (ratingWrapper) {
                ratingWrapper.innerHTML = '';
            }
            let cardsDisabled = document.getElementsByClassName('guessed');
            Array.from(cardsDisabled).forEach(card => {
            card.classList.remove('guessed');
            }) 
        } 
    }, [currentAction]);

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
                new Audio('/well-done.mp3').play();
                let star = document.createElement('i');
                star.className = 'fas fa-star';
                ratingWrapper!.append(star);
                setTimeout(() => {
                    new Audio(lastShuffled).play();
                }, 2000)
                lastShuffled = shuffledAudios[shuffledAudios.length - 1];
            } else {
                new Audio('/error.mp3').play();
                failures.push('failure');
                let brokenHeart = document.createElement('i');
                brokenHeart.className = 'fas fa-heart-broken';
                ratingWrapper!.append(brokenHeart);
            }
            if (shuffledAudios.length === 0) {
                if( failures.length === 0) {
                    document.querySelector('main')!.innerHTML = `<div class='overlay'><h2 class='win'>Success!</h2></div>`;
                    new Audio('/success.wav').play();
                } else {
                    document.querySelector('main')!.innerHTML = `<div class='overlay'>
                    <h2 class='loose'>Work more!</h2>
                    <p>Number of mistakes: ${failures.length}</p>
                    </div>`; 
                    new Audio('/failure.mp3').play();
                }
                //console.log('Work more!');
                setTimeout(() => { location.pathname = '/' }, 2000);
            }
        } 
    }

    return (
        <main>
            <h2>{category.category}</h2>
            <div className="rating"></div>
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