import React, { Component } from 'react';
import context from '../../../utils/context'

class SonChildren extends Component {
    render() {
        console.log(this.props, 'sonChildren')
        return (
            <div>
                <context.Consumer>
                    {
                        (state) => {
                            console.log(state, 'context is props')
                        }
                    }
                </context.Consumer>
            </div>
        );
    }
}

export default SonChildren;
