class User{
  constructor(username){
    this.username=username;

  }
  logMe(){
    console.log(`username is ${this.username}`)
  }
}
class Teacher extends User{
  constructor(username,email,experience){
    super(username)
    this.email=email;
    this.experience=experience
  }
  addCourse(){
    console.log(`new cousse was added by ${this.username} with ${this.experience} years of expreince`)
  }
}
const tea=new Teacher('kebab','jun@.com',5);
console.log(tea.addCourse());
console.log(tea.logMe());