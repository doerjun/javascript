
//{} is the scope {iin object is object declaration}
let a=300//this is global scope
if(true){
  let a=10;  //local or block scope
  const b=20
  //console.log('inner',a)
  //var c=30
}
//console.log(c)
//console.log(a)

//nested scope
function one(){
  const username='jun'

  function two(){
    const website='facebook'
    //console.log(username)
    //console.log(website)

  }
  //console.log(website) it gives you error cause you are acessing outside the scope
  two()
}
one()
if(true){
  const password='234'
  if(password==='234'){
    const web=' intsa';
   // console.log(password+web)
  }
 // console.log(password)
}
//+++++intresting++concept
console.log(addone(5))
//it works cause you only declare function
function addone(val){
  return val+1
}


//addTwo(4)//hoisting
//console.log(addTwo(5))
//it doersnot work cause you hold the function inside variable
const addTwo=function(num){
  return num+2
};
addTwo(4)


//self practice
let b=400;
function two(){
  let b=50
  console.log(`inner ${b}`)//50 calling inner scope
}
two()
console.log(b)//calling outer scope




function web(){
  const username='abc'
  function site(){
    if(username==='abc'){
      const password=456
      console.log(`username ${username} acessed inside scope with password ${password}`)
    }else{
      console.log(`username undefined`)
    }
  }
  
  console.log(username)
  site()
}

web()