// const isUserLoggedIn=true;
// if(2=='2'){
//   console.log('executed')

// }else{
//   console.log('not executed')
// }

//let const scope is local whereas var scope is compelety global
// const score=200;
// if(score>300){
//   const power ='fly'
//   console.log(`user power:${power}`)
// }
const userLoggedIn=false;
const upi=false
if(userLoggedIn &&upi){
  console.log('allow to shop')
}else if(userLoggedIn&&!upi){
  console.log('pleae enter your debit card')
}else{
  console.log('sign up inorder to shop')
}