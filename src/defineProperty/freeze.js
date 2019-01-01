import React, { Component } from 'react'


class TestFreeze extends Component {

  testFreeze = () => {
    const obj = Object.freeze({
      name: 'ck'
    })
    // obj.name = 'ck2'

    console.log('1.打印冻结的obj ------- ', obj)

  }

  render() {
    this.testFreeze()
    return (
      <div>
        <h1>测试Object.Freeze()</h1>
      </div>
    );
  }
}

export default TestFreeze
