

const aray2=['js','python','ruby','swift']

const sum=aray2.reduce((a,b)=>
a+b,0)
console.log(sum)
const num=[1,2,3,4]
const sum1=num.reduce((acc,cv)=>{
console.log(`accumluator ${acc} and current value is ${cv}`);
return acc+cv
},0)
console.log(sum1)
 


const shoppingCart=[
  {
    item:'python',
     price:999
    },
    {item:'js',price:899},
    {item:'mobile dev',price:999},
    {item:'web dev',price:500}
]
//const shopArray=shoppingCart.map((item)=>item.price);
//console.log(shopArray)
//const totalPrice=shopArray.reduce((acc,cv)=>acc+cv,0);
//console.log(totalPrice)
//anothet way
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)