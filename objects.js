//singleton
//object.create i.e constructor
//object literals ways to declare objet
const mySym=Symbol('Key1');
let myObj={
  name:'Jun',
  email:'rokamagar@gmail.com',
  [mySym]:'mykey1',
  location:'Kathmanddu',
  isLoggedIn:false,
  age:23,
  lastLoginDays:['monday','sunday']
}
//console.log(myObj['age']);
//console.log(myObj.location);
console.log(myObj[mySym])
console.log(typeof mySym)
myObj.email='junka@gmail.com';
//console.log(myObj['email'])
//.log(myObj)

myObj.greeting=function(){
  console.log('hello js user')
}
//console.log(myObj.greeting)//function(anonymous) this means function is not excuted but it has references
myObj.greet=function(){
  console.log(`Hello user,${this.name}`)
}
//console.log(myObj.greet());


//object singleton
const tinderUser=new Object()
tinderUser.id='abc';
tinderUser.name='Priya'
tinderUser.isLoggedIn=false
tinderUser.email='priya@gmail.com'
console.log(tinderUser)


const regularUser={
  
  email:'rika@gmail.com',
  fullname:{
    userfullname:{
      firstName:'jun',
      lastname:'magar'
    }
  }
}
console.log(regularUser.fullname.userfullname.lastname)

//const 
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj4={5:'a',6:'b'}
const obj3=Object.assign({},obj1,obj2,obj4)
const obj5={...obj1,...obj2,...obj4}
console.log(obj5)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))