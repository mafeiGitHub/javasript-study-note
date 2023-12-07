// var a=null;
// console.log(a);
// var num = BigInt(2000000);

// console.log(typeof num);
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
