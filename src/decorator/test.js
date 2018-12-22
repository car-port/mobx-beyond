import React, { Component } from 'react'

function doge (target) {
  target.isDoge = '222'
  console.log('------ isDoge', target.isDoge)
}

@doge
class App extends Component {
  constructor() {
    super()
    console.log('---- constructor')
  }

  render() {
    console.log('------- render', this.isDoge)
    return (
      <div>
        测试123 {this.isDoge}
      </div>
    );
  }
}

export default App;
