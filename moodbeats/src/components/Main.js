import React, { Component } from 'react';

//Components
import Header from './Header';
import Icon from './Icon';
import Body from './Body';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Icon />
                <Body />
            </div>
        );
    }
}

export default Main;