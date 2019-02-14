import React, { Component } from 'react';

import connect from '../../utils/connect'

// import SonChildren from './subpage/index'

class Connect extends Component {
    componentDidMount() {
        let { changeName } = this.props;
        changeName()
    }
    render() {
        console.log(this.props, 'Connect')
        return (
            <div>
                this is Connect
                {/* <SonChildren /> */}
                {
                    // this.props && this.props.map(item =>{
                    //     return <h6>{ item }</h6>
                    // })
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store['zhangsan']
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName() {
            return dispatch({
                type: 'CHENGE_NAME',
                payload: '假如我年少有为，她少受罪！'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
