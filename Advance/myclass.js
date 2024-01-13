//es 6
class User{
  constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
  }
//whenever the object initialize from the class cons is called
encryptPassword(){
  return `${this.password}abc`
}
changeUser(){
  return`${this.username.toUpperCase()}`
}
changeEmail(){
  return`${this.email}kumar@developer.com`
}
}
const chai=new User('jun','jun@gmail.com','123');
console.log(chai)
console.log(chai.encryptPassword());
console.log(chai.changeUser())
console.log(chai.changeEmail())


//this is how the upperone works behind the scene
function User1(username,email,password){
  this.username=username;
  this.email=email;
  this.password=password
}

User1.prototype.changeEmail1=function(){
  return(`${this.email}junk`)
}
const chai1=new User1('kumja','kumja@gmai.com','3245') //this is createing instance
console.log(chai1);
console.log(chai1.changeEmail1());

class Teacher{
  constructor(pay,experience){
    this.pay=pay;
    this.experience=experience;

  }
  getPaid(){
    if(this.experience>=5){
      return`Teacher with ${this.experience} of experience will recive the payment of ${this.pay*this.experience} per class`

   }else{
       return`Teacher with less than 5years of experience will receive ${this.experience*200}`
}
  }
}
const subam=new Teacher(500,6);
console.log(subam.getPaid())
const vijay=new Teacher(300,8);
console.log(vijay.getPaid())
const jumj=new Teacher(500,2);
console.log(jumj.getPaid())