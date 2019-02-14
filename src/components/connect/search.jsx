import React, { Component } from 'react';

import connect from '../../utils/connect'

class Search extends Component {
    render() {
        console.log(this.props, 'Search')
        return (
            <div>
                this is search
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store['lisi']
}

export default connect(mapStateToProps)(Search);
