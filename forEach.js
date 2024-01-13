const coding=['js','java','python','ruby']
coding.forEach(function (i){
  //console.log(i)

})
function printMe(item,index,arr){
  //console.log(item,index,arr)
}
coding.forEach(printMe);
const myCode=[
  {
    lanN:'js',
    lanF:'jss'
},
{lanN:'java',
lanF:'java+'}
]
myCode.forEach((item)=>{
  console.log(item.lanF)
})
const myNum=[1,2,3,4,5,6,7,8,9]
const newNum=myNum.filter((num)=>num>5)
console.log(newNum)