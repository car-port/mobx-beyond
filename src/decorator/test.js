import React, { Component } from 'react'

function testable(target) {
  target.isTestable = 123
}

@testable
class MyTestableClass {
  // ...
}


class App extends Component {

  render() {
    console.log('-------', MyTestableClass.isTestable)
    return (
      <div>
        测试 {MyTestableClass.isTestable}
      </div>
    );
  }
}

export default App
