function setUserName(username,){
  //complex calculation
  this.username=username
  console.log('called')

}
function createUser(username,email,password){
  //setUserName(username);//you are only giving reference you are not calling
  setUserName.call(this,username)//in this secnario .call is holding ref

  //acccording global execution context setusername is out and if you need my things you can use with(this,)


  this.email=email
  this.password=password
}
const chai=new createUser('jun','rokakumar','abc');
console.log(chai)


function setPassword(password,email){
  this.password=password
  this.email=email
  console.log('executes already')
}
function loggedIn(password,email,username){
  setPassword.call(this,password,email)
  this.username=username
}
const jun=new loggedIn('abc','rokakumar@gmail.com','jun')
console.log(jun)