import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';
import { images } from './shared/categoryImages';

import { GameActions } from './models/GameActions';

export const App = () => {
    const [currentAction, setCurrentAction] = useState(GameActions.Train);
    const [audios, setAudios] = useState<Array<string>>([]);
    const [shuffledAudios, setShuffledAudios] = useState<Array<string>>([]);

    useEffect(() => {
        if (currentAction === GameActions.Started) {
            setShuffledAudios(audios.slice().sort(() => Math.random() - 0.5));
        }
    }, [currentAction])


    useEffect(() => {
        localStorage.setItem('action', currentAction as unknown as string);
    }, [currentAction]);

    return (
        <div className="view">
            <Router>
                <Header 
                    currentAction={currentAction} 
                    setCurrentAction={setCurrentAction}
                    name={location.pathname.slice(10)}
                    audios={audios}
                    setAudios={setAudios}
                    shuffledAudios={shuffledAudios}
                />
                <Switch>
                    <Route path="/category/:name" render={(props) => 
                        <CategoryPage 
                            name={props.match.params.name}
                            setCurrentAction={setCurrentAction}
                            currentAction={currentAction}
                            category={images.filter((x) => x.category === props.match.params.name)[0]}
                            audios={audios}
                            setAudios={setAudios}
                            shuffledAudios={shuffledAudios}
                            setShuffledAudios={setShuffledAudios}
                        />
                    } />
                    <Route exact path="/" render={HomePage} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}