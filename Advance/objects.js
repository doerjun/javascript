function multiply(num){

  return num*5;
}
multiply.power=2;
console.log(multiply(4));
console.log(multiply.power);
console.log(multiply.prototype);//

function createUser(username,score){
  this.username=username;
  this.score=score;

}
createUser.prototype.increment=function(){
  this.score++;
}
createUser.prototype.printMe=function(){
  console.log(`score is ${this.score}`)
}
const chai=new createUser('chai',25);
const tea=createUser('tea',250);
chai.printMe();
{/*bts of new keywoerd
 //a new object is created.the new keyword initiates the creation of new js object. object prototype se linked hoga hae hoga
 //a prototype is linke:the newly created objects gets linke to prototype property of constructor function.this means it has acess to props and methods defind on the constructor's prototype
  //the constructor is called:the constructor function is called with the specified arguments and this is bound to the newly created object.if no explicit return valule is specified fromthe constructor,js assumes this,the newly created object,to the intended return value;
  //the new object is returned:after the constructor function has been callled ,if it doesnot return a non-primitive value(object,array,function etc.) the newly created object is returned
 



 */}