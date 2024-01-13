// for of
const arr=[1,2,3,4,5]
for (const i of arr) {
  //console.log(i);
  
}
//
const map=new Map()
map.set('IN','India');
map.set('Fr','France')
map.set('Ne','Nepal')
console.log(map)
for (const [key,value] of map) {
  console.log(key)
  console.log(value)
}