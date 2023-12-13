// 写法1
/*(function () {
    console.log(3)
})();//()是函数的执行符号*/
// 写法2
// (function () {
//     console.log(123)
// }())
// 加传参
// var num = (function (a,b) {
//    return a+b;
// }(1,2))
//
// console.log(num)

/*function test(){
    var arr =[]
    for (var i = 0; i < 10; i++) {
        arr[i]=function () {
            console.log(i+'')
        }
    }
    return arr;
}
var myArr = test()
// test();
for (var j = 0; j < 1; j++) {
    myArr[j]();
}*/
/*function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        (function (j) {
            console.log(j + '');
        })(i);
    }
    return arr;
}
test()*/
/*
var fn = (function test1() {
    return 1;
}, function test2() {
    return '2';
})()

console.log(typeof (fn))//string
*/
var a= 10;
if (function b(){}){
    a+=typeof(b)
}
console.log(a)
