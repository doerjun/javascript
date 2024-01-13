const coding=['js','ruby','java']
const values=coding.forEach((item)=>{
  //console.log(item)
})
//console.log(values)
const num=[1,2,3,4,5,6,7,8,9]
const newNum=num.filter((item)=>{return item>4})
console.log(newNum)

const books=[
  {title:'book one',genre:'fiction',publish:'1981',edition:2004},
  {title:'book two',genre:'non-fiction',publish:'1992',edition:2005}
]
const genreId=books.filter((item)=>{
  return item.genre==='fiction'

})
console.log(genreId)
