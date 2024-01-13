class User{
  constructor(username){
    this.username=username;
    
  }
  logMe(){
    console.log(`username: ${this.username}`)
  }
   //static createId(){
    //return `123`
  //adding static in your code cannot let access the the function
}
const tea=new User('jun');
//console.log(tea.createId()); //because you added static you cannot acess createId
//tea.logMe()
class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
  checkEmail(){
    console.log(`the name of teacher is ${this.username} with email ${this.email}`)
  }
}
const phone=new Teacher('samsung','i@pone.com');
phone.logMe();
console.log(phone.createId())
phone.checkEmail()