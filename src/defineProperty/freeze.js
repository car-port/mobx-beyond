import React, { Component } from 'react'
import Prism from 'prismjs'
Prism.highlightAll()



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

        <pre>
          <code className="language-js">
          {`
            onSubmit(e) {
              e.preventDefault();
              const job = {
                title: 'Developer',
                company: 'Facebook'
                };
              }
          `}
          </code>
        </pre>
      </div>
    );
  }
}

export default TestFreeze
