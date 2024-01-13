const myArray=[0,1,2,3,4,5,true,'jun'];
const myHeros=['ironMan','spiderman','thor'];
const dc=['superman','batman','flash']
const  myArr=new Array(3,4,5)

//array methods
//

//slice ,splice
const myn1=myArray.slice(1,4);
//console.log(myn1);//1,2,3
const myn2=myArray.splice(1,4);
//console.log(myn2);
//console.log(myArray)//
//myHeros.push(dc);
//console.log(myHeros[3][2])//flash
//const marvelHeros=myHeros.concat(dc);
//console.log(marvelHeros)
const allHeros=[...myHeros,...dc]//spread operator
console.log(allHeros)
const another_array=[1,2,3,[4,5],6,[7,8,[9,10]]]
const real_array=another_array.flat(Infinity)
console.log(another_array);
console.log(real_array)
console.log(Array.from('sansar'))//[s,a,n,s,a,r]

