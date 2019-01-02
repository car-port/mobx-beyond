import React, { Component } from 'react'
// import Prism from 'prismjs'
// Prism.highlightAll()

let code = `
const obj = {
  money: 100
}
let freezeObj = Object.freeze({
  money: 100
})

obj.money = 200   // 修改属性成功
obj.name = 'test' // 添加属性成功
delete obj.name   // 删除属性成功


freezeObj.money = 200   // 修改失败
freezeObj.name = 'test' // 添加失败
delete freezeObj.name   // 删除失败

`


class TestFreeze extends Component {

  render() {

    return (
      <div>
        <h1>Object.Freeze()</h1>
        {/*<pre>*/}
          {/*<code className="language-js">*/}
          {/*{code}*/}
          {/*</code>*/}
        {/*</pre>*/}
      </div>
    );
  }
}

export default TestFreeze
