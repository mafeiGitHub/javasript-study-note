# JavaScript总结

## 1.发展史

网景公司开源->ECMAscript6

## 2.变量类型

简单数据类型

- Number
- BigInt
- String
- Boolean
- Null
- Undefined
- Symbol

复杂数据类型

- Array
- Object
- Function
- JSON
- Date
- Map
- Set

## 3.数值转换

### 3.1显式转换

转换为字符串：toString()或String()

转换为数字：Number()、parseInt()、parseFloat()

转换为布尔值：Boolean()

转换为对象：Object()

### 3.2隐式转换

在运算时，当运算符两边的类型不一致时会先进行类型转换再运算。

在使用逻辑判断符时列如if、while、for、！会隐式转换为布尔值，大多数会转换为true,只有`false undefined null NaN "" [] 0 -0`会判定为false。

**+运算符**

```javascript
//布尔值+布尔值
console.log(true + true); //2
// 数字+布尔值 布尔值转数字
console.log(1 + true); //2
// 数字+字符串  数字转字符串
console.log(1 + "1"); //11
//字符串+布尔值 布尔值转字符串
console.log("abc" + true); //abctrue
// 数组+数组 数组会转化为字符串 1,2,3 进行拼接
console.log(1 + [1, 2, 3]); //11,2,3
// 对象会转为[object Object]
console.log(1 + { age: 18, height: 177 }); //1[object Object]
```

**==运算符**

1. null和undefined双等的时候为true，别的均为false。
2. 布尔值和字符串会优先转为数字进行比较
3. 对象会转为原始值进行比较

```js
//双等运算符
console.log(null == undefined); //true，只有这种情况为true,别的均为false
console.log(1 == "1");//true
console.log(1 == true);//true
console.log("1" == true);//true
let obj = {
    age:1,
    // toString(){
    //     return this.age
    // },
};

console.log(1==obj);//false
```

## 4.函数

### 4.1形参与实参

```js
function test(a,b) {
    //a b形参
    console.log(test);
    console.log(test.length);//形参的长度
    console.log(arguments);
    console.log(arguments.length);//实参的长度
}
test(1,2,3)//1 2 3实参
```





