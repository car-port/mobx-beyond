
```js
let obj = {money: 100}
let freezeObj = Object.freeze({ money: 100})

obj.money = 200   // 修改属性成功
obj.name = 'test' // 添加属性成功
delete obj.name   // 删除属性成功
obj = {}          // 

freezeObj.money = 200   // 修改失败
freezeObj.name = 'test' // 添加失败
delete freezeObj.name   // 删除失败
```
