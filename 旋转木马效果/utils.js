 //根据id获取对应的元素
 function my$(id) {
  return document.getElementById(id);
}
//获取计算样式
function getStyle(element,attr) {
    // return window.getComputedStyle?window.getComputedStyle(element,null).attr
    // :element.currentStyle.attr 这样不行，因为attr是形参
    //window.getComputedStyle记得不能带括号，带了括号就是返回值了
   // window.getComputedStyle等价if(window.getComputedStyle)等价if(typeof window.getComputedStyle == "undefined")
     return window.getComputedStyle?window.getComputedStyle(element,null)[attr]
     :element.currentStyle[attr]
  }
//传入 移动的节点 和 移动的目标位置
function animation(element,json,fn) {    
  //这里是为了清除多次点击以后前面设置的的定时器，从而避免速度加快的现象
  if (element.timeId) {
    clearInterval(element.timeId)
  }
  //设置定时器
 element.timeId = setInterval(function () { 
   var flag = true ;//默认所有属性都到达目标
   for(var attr in json){
     //判断是否opacity
     if (attr=="opacity") {
       var current = getStyle(element, attr) * 100;
       //每次移动多少步
       var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
       var step = (target - current) / 10;//(目标-当前)/10
       step = step > 0 ? Math.ceil(step) : Math.floor(step);
       current = current + step;
       element.style[attr] = current / 100;
     }else if (attr=="zIndex") {
       //判断是否zIndex
      element.style[attr] = json[attr];
     }else{
       //判断是否是普通属性
        //因为getStyle()函数得到的有些属性值是带px，例如：width，所以通过parseInt()函数去除后面的单位值px;
        var current = parseInt(getStyle(element,attr));
        var target = json[attr];
        var step = (target-current)/10;//json[attr]不能写成json.attr,因为attr是变量
        step = step>0?Math.ceil(step):Math.floor(step);
        current+=step;
        element.style[attr] = current+"px";
     }
      //只要一个属性没有到达目标就变为false
      if (current!=target) {
        flag= false;
      }
   }
    //全部到达目标
    if (flag) {  
        // console.log("我到了");
        clearInterval(element.timeId);
         //执行回调函数
         if (fn){
          fn();
         }
      }
  },20);
}