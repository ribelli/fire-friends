import React, { Component } from 'react';
import './style/index.scss';

class SplitPane extends Component {

    render() {
        return (
            <div className="split-pane">
                <div className="split-pane__left-side">
                    {this.props.left}
                </div>
                <div className="split-pane__right-side">
                    {this.props.right}
                </div>
            </div>
        )
    }
}

export default SplitPane;
