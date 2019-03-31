import React, { Component } from 'react';

//Components
import Logo from './Logo';
import Icon from './Icon';
import Body from './Body';

class Main extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Icon />
                <Body />
            </div>
        );
    }
}

export default Main;