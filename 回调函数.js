//第一种----------------------------------------
function parent(str,callback) {
  console.log(str);
  callback();
}
function son() {
  console.log("执行了回调函数！");
}
//先定义一个回调函数son，再把回调函数名son传进去
parent("先执行我",son);


//第二种----------------------------------------
function parent(str,callback) {
  console.log(str);
  callback();
}
//直接定义一个匿名函数作为传入的参数，那么parent函数里面的callback相当于一个指针，指向了定义的匿名函数
parent("先执行我",function () {
  console.log("执行了回调函数！");
});


//第三种----------------------------------------
function parent(str,callback) {
  console.log(str);
  callback();
}
//直接把一个函数声明作为传入的参数，那么parent函数里面的callback相当于一个指针，指向了这个函数
parent("先执行我",function son() {
  console.log("执行了回调函数！");
});