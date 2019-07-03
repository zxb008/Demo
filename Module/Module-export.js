// 1.常规写法

  // export  var a = 1;
  // export  var b = 1;
  // export function f1() {
  //   console.log("f1");
  // }

  //等价
   var a = 1;
   var b = 1;
   function f1() {
     console.log("f1");
   }
  export {
    a,
    b,
    f1 as f  //as 起到重命名的作用
  }


//-----------------------------------------------------------------------------------
// 2.default写法 

//export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，
//因此export default命令只能使用一次。所以，import命令后面才不用加大括号，
//因为只可能唯一对应export default命令。

//----用于匿名函数中
export default function () {
  console.log("export default");
}
//----用于非匿名函也是可以的，在代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。
// export default function foo() {
//   console.log('foo');
// }
// function foo() {
//   console.log('foo');
// }
// export default foo;

//---------------------------------------------------------------------------
// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

// function add(x, y) {
//   return x * y;
// }
//export {add as default};
// 等同于
// export default add;

//import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
//---------------------------------------------------------------------------
// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// // 正确
// export var a = 1;
// // 正确
// var a = 1;
// export default a;

// // 错误
// export default var a = 1;
// 上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。

//---------------------------------------------------------------------------
// 同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
// // 正确
// export default 42;
// // 报错
// export 42;
// 上面代码中，后一句报错是因为没有指定对外的接口，而前一句指定对外接口为default。