

function cakes(recipe, available) {
  
  //得到两个对象属性对应的两个数组
  var recipeArray = [];
  var availableArray = [];
  for (let key in recipe) {
   recipeArray.push(key);
  }
  for (let key in available) {
   availableArray.push(key);
}
//判断食谱要求的材料是否全部存在于可用的材料中
var boolean =  recipeArray.every(function (item,index,array) {
  if ( availableArray.indexOf(item) != -1) {
     return true;
  } else {
     return false;
  }
})
   if (boolean) {
      //全部存在,判断能够制造几个蛋糕
    var number = recipeArray.map(function (item,index,array) {
      //recipe[item];食谱中该材料要求的数量
      //vailable[item];可用材料中该材料已有的数量
      //console.log(available[item]+";"+recipe[item]);
      
      return Math.floor(available[item] /  recipe[item]);
      })
     
      
    //分析这个数组，返回最小的值
    number.sort(function (e1,e2) {
       if(e1<e2){
          return -1;
       }else if(e1>e2){
         return 1;
       }else{
         return 0;
       }
    })
    return number[0];
   } else {
      //缺少
      return 0;
   }

}
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

