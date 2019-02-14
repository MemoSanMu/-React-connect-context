import React, { Component } from 'react';
// import ParentCom from '../components/parent'
import Connect from '../components/connect/index'
import Search from '../components/connect/search'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <ParentCom /> */}
          <Connect name = "张三" />
          <Search />
      </div>
    );
  }
}

export default App;
