//this tells abt current context
const user={
  username:'jun',
  price:999,
  welcomeMesssage:function(){
    console.log(`${this.username} welcome to the future`)
    console.log(this)
  }
  

}
// user.welcomeMesssage()
//user.username='sam';
//user.welcomeMesssage()
//console.log(this)
// function chai(){
//   let username='jun'
//   console.log(this.username)
// }
// chai()


//pure arrow functions
//if use {} return keyword is must if () no need to use return keyword
const addTwo=(num1,num2)=>{
  return num1+num2
}
console.log(addTwo(56,46))

//implicit return
const addThree=(a,b,c)=>(a+b+c);
console.log(addThree(4,5,6))

