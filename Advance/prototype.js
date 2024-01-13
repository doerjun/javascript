//
let myhero=['thor','spiderman'];
let heroPower={
  thor:'hammer',
  spiderman:'sling',
  getSpiderPower:function(){
    console.log(`spdiey power sis ${this.spiderman}`)
  }
}
Object.prototype.hitesh=function(){
  console.log(`hitesh is present in all objects`)
}
//heroPower.hitesh()
Array.prototype.hayHitesh=function(){
  console.log('hitesh says hello')
}
myhero.hitesh();
myhero.hayHitesh();
//)heropowr.hayHitesh


//inheritance
const User={
  name:'jun'

}
const Teacher={
  makeVideo:true
}
const TeachingSupport={
  isAvailable:false
}
const TSupport={
  makeAssignment:'js assignment',
  fulltime:true,
  __proto__:TeachingSupport //tsuport inheriting the property of ttechingsupport
}
Teacher.__proto__=User
//modern syntx
Object.setPrototypeOf(TeachingSupport,Teacher);
Object.setPrototypeOf(Teacher,User)

let anotheruser='jun     ';
String.prototype.trueLenght=function(){
  console.log(`${this.name}`)
  console.log(`${this}`)
  console.log(`True lenght is:${this.trim().length}`)
}
anotheruser.trueLenght();
'makevideos  '.trueLenght()