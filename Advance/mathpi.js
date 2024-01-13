const desc=Object.getOwnPropertyDescriptor(Math,'PI');
// Object.defineProperty(Math,'PI',{
//   writable:true,
//   enumerable:true,
//   configurable:true
// })
console.log(desc)

//console.log(Math.PI)
const chai={
  name:'ginger',
  price:250,
  isAvailable:true,
  orderChai:function(){
    console.log(`come and order chai`)
  }
}
console.log(chai)
//console.log(Object.getOwnPropertyDescriptor(chai,'name'))
Object.defineProperty(chai,'name',{
  writable:false,
  enumerable:true,
  
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
for (let [key,value] of Object.entries(chai)) {
  if(typeof value !=='function'){
    console.log(`${key} ,${value}`)


  }
  //console.log(`${key} ,${value}`)
  
}

