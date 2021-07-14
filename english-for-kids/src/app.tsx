import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CardsPage';
import { images } from './shared/categoryImages';
import { GameActions } from './models/GameActions';
import { StatsPage } from './components/StatsPage';
import { LoginForm } from './components/LoginForm';

export const App = () => {
    const [currentAction, setCurrentAction] = useState(GameActions.Train);
    const [audios, setAudios] = useState<Array<string>>([]);
    const [choices, setChoices] = useState<Array<boolean>>([]);
    const [failures, setFailures] = useState<number>(0);
    const [loginForm, setLoginForm] = useState(false);
    const [count, setCount] = useState<number>(0);
    const [shuffledAudios, setShuffledAudios] = useState<Array<string>>([]);
    const category = images.filter((x) => x.category === window.location.pathname.slice(10))[0];

    useEffect(() => {
        if (category) {
            setAudios(category.images.map((name) => `/${category.category}/${name}.mp3`));
        }
        document.querySelector('#checkbox')?.setAttribute('checked', 'false');
    }, [window.location.pathname]);

    useEffect(() => {
        if (currentAction === GameActions.Started) {
            setShuffledAudios(audios.slice().sort(() => Math.random() - 0.5));
        }
        setCount(0);
    }, [currentAction]);

    return (
        <div className='view'>
            <Router>
                <Header
                    currentAction={currentAction}
                    setCurrentAction={setCurrentAction}
                    shuffledAudios={shuffledAudios}
                    count={count}
                    loginForm={loginForm}
                    setLoginForm={setLoginForm}
                />
                <Switch>
                    <Route path='/category/:name' render={(props) => <CategoryPage
                            name={props.match.params.name}
                            currentAction={currentAction}
                            category={images.filter((x) => x.category === props.match.params.name)[0]}
                            shuffledAudios={shuffledAudios}
                            count={count}
                            setCount={setCount}
                            failures={failures}
                            setFailures={setFailures}
                            choices={choices}
                            setChoices={setChoices}
                            loginForm={loginForm}
                            setLoginForm={setLoginForm}
                        />
                    } />
                    <Route path='/statistics' render={StatsPage} />
                    <Route path='/login' render={LoginForm} />
                    <Route exact path='/' render={HomePage} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};
