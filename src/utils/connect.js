import React from 'react';
import context from './context'

function connect(callback, dispatch){
    return (Components) => {
        return class extends React.Component {
            render() {
                return (
                    <context.Consumer>
                        {
                            (store) => {
                                let res = callback(store)
                                let mapDispatch = (ops) => {
                                    // 可以接受到组件发送的参数执行 然后反会执行结果 在映射到相应组件中即可this.props 访问
                                    return ops;
                                }
                                let ops = dispatch && dispatch(mapDispatch)
                                console.log(ops,'00')
                                return <Components { ...res } { ...ops } { ...this.props } />
                            }
                        }
                    </context.Consumer>
                )
            }
        }
    }
}

export default connect;