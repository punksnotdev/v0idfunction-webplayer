import React, { Component } from 'react';

import TextTemplate from './TextTemplate';

class Text extends Component {
    
    state = {
        texts: [
            'uno',
            'dos',
            'tres',
            'cuatro',
        ],
        currentText: 0
    };


    componentDidMount() {

        setInterval( () => {
            
            let currentText = this.state.currentText+1;
            currentText %= this.state.texts.length;

            this.setState({currentText});   
                 
        },
        2000);
        

    }


    render() {

        return (

            <TextTemplate text={ this.state.texts[this.state.currentText] }/>

        )

    }

}

export default Text;
