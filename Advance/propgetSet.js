function User(email,password){
  this.email=email;
  this.password=password;

  Object.defineProperty(this,'email',{
    get:function(){
      console.log('getter is executed')
      return this._email.toUpperCase();
      //console.log(`this is js function gettersetter`)
    },
    set:function(val){
      this._email=val

    }
  })

}
const chai=new User();
 chai.email='rokadev@'
console.log(chai.email)
//console.log(chai.email)
function Teacher(exp,edu){
  this.exp=exp;
  this.edu=edu;

  Object.defineProperty(this,'exp',{
    get:function(){
      return `the teacher have experience of teaching ${this._exp} years in development`
    },
    set:function(val){
      this._exp=val
    }
  })
}
const science=new Teacher();
science.exp='5';
console.log(science.exp)