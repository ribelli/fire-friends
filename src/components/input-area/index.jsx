import React, { Component } from 'react';
import './style/index.scss';

const PLACEHOLDER_VALUE = 'Write a message...';

// TODO: this file require in review

class InputArea extends Component {
    state = {
        text: '',
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

        this.props.onSendMessage(this.state.text);
        this.setState({text: ''});
    };

    render() {
        return(
            <section className="input-layer">
                <form className="input-layer__form" onSubmit={this.onFormSubmit}>
                    <textarea className="textarea textarea_dark fr-textarea"
                              onChange={e => this.onChange(e)}
                              onKeyDown={this.onKeyDown}
                              value={this.state.text}
                              placeholder={PLACEHOLDER_VALUE}
                              rows={2}
                              tabIndex="1"
                              spellCheck="true" />
                </form>
            </section>
        );
    }
}

export default InputArea;
