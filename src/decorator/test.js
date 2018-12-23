import React, { Component } from 'react'

// function doge (target) {
//   target.isDoge = '222'
// }
//
// @doge
// class Test {
//
// }

function readonly(target, key, descriptor) {
  descriptor.writable = false
  console.log('--------- ')
  return descriptor
}


class App extends Component {

  @readonly name = 'king'

  render() {
    this.name = 'queen'
    return (
      <div>
        测试{this.name}
      </div>
    );
  }
}

export default App
