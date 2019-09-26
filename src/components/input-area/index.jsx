import React, { Component } from 'react';
import './style/index.scss'

const placeholderValue = 'Write a message...';

class InputArea extends Component {
    render() {
        return(
            <section className="input-layer">
                <textarea className="input-layer__textarea _dark" placeholder={placeholderValue} rows={3} />
            </section>
        );
    }
}

export default InputArea;
