import React, { Component } from 'react';
import SonCom from './subpage'
import context from '../../utils/context'

class ParentCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '独家记忆'
        }
    }
    
    changeContext = (newCon) => {
        this.setState({
            msg: newCon
        })
    }
    render() {
        let { msg } = this.state;
        return (
            <div>
                <context.Provider value = {
                    {
                        changeContext: this.changeContext
                    }
                }>
                    <SonCom msg = { msg }/>
                </context.Provider>
                
            </div>
        );
    }
}

export default ParentCom;
