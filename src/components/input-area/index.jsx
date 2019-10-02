import React, { Component } from 'react';
import { Send } from 'react-feather';
import './style/index.scss';

const placeholderValue = 'Write a message...';

// TODO: create logic for tabIndex at elements
// TODO: this file require in review

class InputArea extends Component {
    state = {
        text: ''
    };

    onChange = (e) => {
        this.setState({text: e.target.value});
    };

    onKeyDown = (event) => {
        if (event.shiftKey && event.key === 'Enter') {
            this.setState(prevState => ({ text: prevState.text}));
        }
        else if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.onFormSubmit();
        }
    };

    onFormSubmit = () => {
        if (this.state.text.trim() === '') return;
        // if (!(/\S/.test(this.state.text))) {
        //     return false;
        // }
        this.props.onSendMessage(this.state.text);
        this.setState({text: ''});
    };

    render() {
        return(
            <section className="input-layer">
                <form className="input-layer__form" onSubmit={this.onFormSubmit}>
                <textarea className="input-layer__textarea _dark"
                          onChange={e => this.onChange(e)}
                          onKeyDown={this.onKeyDown}
                          value={this.state.text}
                          placeholder={placeholderValue}
                          rows={3} tabIndex="5" spellCheck="true" />
                    <button type="Submit">
                        <Send size='30'/>
                    </button>
                </form>
            </section>
        );
    }
}

export default InputArea;
