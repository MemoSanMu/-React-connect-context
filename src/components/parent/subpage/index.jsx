import React, { Component } from 'react';
import GarndSonCom from './subpage'

class SonCom extends Component {
    render() {
        let { msg } = this.props;
        return (
            <div>
                {msg}
                <GarndSonCom />
            </div>
        );
    }
}

export default SonCom;
