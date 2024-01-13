const userEmail=[];//anything you write under string is considerd truthy
if(userEmail.length===0){
  console.log('array is empty')
}else{
  console.log('dont have user email')
}
//this is truthy or falsy 
//falsy value=false ,0,-0,biginit 0n,'',null,undefined,NaN
const emptyObj={}
if(Object.keys(emptyObj).length===0){
  console.log('object is empty')
}else{
  console.log('objecy has keys')
}
//nullish coalescing operator:null undefined(??)
let val1;
//val1=5??10;
val1=null??10
console.log(val1);

//terniary operator
const iceTea=100;
iceTea<=80?console.log('less than 80'):console.log('more than 80')
for(let i=0;i<=10;i++){
  for(let j=0;j<=10;j++){
    console.log(`${i}* ${j}`)
  }
}
