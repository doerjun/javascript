//console.log(34==='34');//strict equality opeeration
//console.log('2'>1);//true
//console.log('02'>1);//true
//clean code has more value s
//primitive data type (make copy of each type not allocated in memory only copy)
//valueka copy milareh
//7 types:
//string //number //boolean //null //undefined //BigInt//symbol(if you want to make the value unique use in advanced js)


//Reference data type or non-primitive data type
//refersence of var is availabel
//directly allocated in the memory
//array,objects,functions
const id=Symbol('123');
const id1=Symbol('123');
console.log(id===id1);

//two types of memory
//Stack(Primitive) ,Heap(non-primitive)

//stack memory
let myName='Jun Magar';
let anotherName=myName;
anotherName='coffeeaurcode'
console.log(anotherName);
console.log(myName);
//heap memory
let userOne={
  name:'jun',
  email:'rokakumar@gmail.com'
};
let userTwo=userOne;
userTwo.email='junk@gmail.com';
console.log(userOne.email);
console.log(userTwo.email)
