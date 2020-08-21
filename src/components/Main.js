import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import MyAccount from './MyAccount';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <div>

                </div>
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' render={() => <Contact />} />
                    <Route exact path='/aboutus' render={() => <About />} />
                    <Route exact path='/myaccount' render={() => <MyAccount />} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;