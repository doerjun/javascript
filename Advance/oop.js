//js and classes 
//oop is programming paradigm 
// object collection of props and methods--tolowercase ,promis,to uppercase
//why use oop
const user={
  username:'jun',
  loginCount:8,
  signedIn:true,
  getUser:function(){
    console.log('got user details from db')
    console.log(this);
  }
};
//console.log(user.username);
console.log(user.getUser())
//console.log(this)// {}


//constructor function
//new keyword is counstructor function
function User(username,loginCount,isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;
  this.gretting=function(){
    console.log(`${this.username}`)
  }
  //return this
}
//const userOne=User('jun',12,false);
//const userTwo=User('moon',34,false)
//console.log(userOne) //userTwo will override userOne in this case so new keyword is must
const userOne=new User('jun',12,true);//constructor functioon gives you everytime new instances 
const userTwo=new User('mun',34,false)
console.log(userOne)
//every time you use new keyword a new empty object is created you can call it instance
console.log(userOne instanceof(User))

function printName(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
}
const User1=new printName('jun',26,'developer');
console.log(User1)
console.log(User1.name);
