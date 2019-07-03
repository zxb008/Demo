
// 1.常规写法
import { a,b,f } from './Module-export'
console.log(a);
console.log(b);
f();
// import * as object from './Module-export.1'
// console.log(object.a);
// console.log(object.b);
// object.f();


// 2.default写法
//采用default的方式，不需要写大花括号{}
import sun from './Module-export'
sun();
 