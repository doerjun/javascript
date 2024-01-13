class User{
  constructor(email,password){
    this.email=email;
    this.password=password
    
  }
  get email(){
    console.log('email received')
    return this._email.toUpperCase();
  }
  set email(value){
     this._email=value;

  }
  get password(){
    console.log('password has benn hacked with new password');
    return `${this._password}oop`
  }
  set password(value){
    this._password=value
    console.log('this is the setter')
    
  }
};
const chai=new User('roka@developer','jkl');
//console.log(chai);
console.log(chai.email);
console.log(chai.password)