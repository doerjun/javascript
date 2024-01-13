const num=[1,2,3,5,4,5,6,7,8,9]
const myNum=num.map((item)=>item+10);
//console.log(myNum);
const num1=num.forEach((item)=>{
  //console.log(item+10)
});
//console.log(num1)
const newNum=num
.map((num)=>num*10)
.map((num)=>num+1)
.map((num)=>num*5)
.filter((num)=>num>200);
console.log(newNum)
