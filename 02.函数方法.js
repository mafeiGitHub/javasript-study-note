function test(a,b) {
    //a b形参
    console.log(test);
    console.log(test.length);//形参的长度
    console.log(arguments);
    console.log(arguments.length);//实参的长度
}
test(1,2,3)//1 2 3实参
function test1(name){
    return name||'名字'
}
console.log(test1());
