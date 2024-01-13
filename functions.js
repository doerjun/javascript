function sayMyName(){
  console.log("jun")
};
//ayMyName// reference
//sayMyName() //excution
function addTwo(a,b){ //(a,b is parameters)
  return a+b;

}
const add=addTwo(5,7);//5,6 arguments
//console.log('add',add)
function loginMessage(username){
  if(!username){
    return 'eneter username'
  }else{
  return`${username} just logged in`
  }
};
//console.log(loginMessage())

function calculateCarPrice(...num){
  return num
}
const price=calculateCarPrice(34,34,35,56);
console.log(price)
const user={
  username:'jun',
  price:199
}
function handleObject(anyobject){
  return(`username is ${anyobject.username} and price is${anyobject.price}`)
}
const handleObject1=handleObject(user);
console.log(handleObject1)

const myArray=[23,34,45,56]
function returnSecond(num){
  return num[0]

}
console.log(returnSecond(myArray));