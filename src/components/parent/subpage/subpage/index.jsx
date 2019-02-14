import React, { Component } from 'react';
import context from '../../../../utils/context'

class GarndSonCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMsg: '我希望你，是我独家的记忆！'
        }
    }
    
    render() {
        let { newMsg } = this.state;
        return (
            <div>
                this is GarndSonCom
                <context.Consumer>
                    {
                        (content) => {
                            return <button onClick = {()=> {
                                content.changeContext(newMsg)
                            }}>change content</button>
                        }
                    }
                </context.Consumer>
            </div>
        );
    }
}

export default GarndSonCom;
