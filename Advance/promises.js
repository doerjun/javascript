//fetch('https://google.com').then().catch().finally()
const promise1=new Promise(function(resolve,reject){//
  //do an asynnc task //db callls //cryptography,network call
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()//calling this resovlve connects with .then resulting the excutiion of .then 

  },1000)

})
//consumpution
//connection of resolve is with .then
promise1.then(function(){
  console.log("promised consume")
})



const promise3=new Promise(function(resolve,reject){
  setTimeout(function(){
    
    resolve({username:"chai",email:'chai@gmail.com'})
  },1000)
})
promise3.then(function(user){
  //console.log('no errrors')
  console.log(user)

})
const promise4=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve([1,2,'jun','programmer'])
  },1000)
})
promise4.then(function(arr){
  console.log(arr[3]);

})
const promise5=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      //no error
      resolve({name:'jun',job:'programmer'})
    }else{

      reject('error something went wrong')
    }
  },1000)
})
promise5.then((obj)=>{
  console.log(obj)
  return obj.name;

}).then((name)=>{
  //chaining

  console.log(name)

}).catch((err)=>{
  console.log(err)

}).finally(()=>{
  console.log('finally the promis is either resolved or rejects')
})
// const promise6=new Promise(function(resolve,reject){
//   let error=true;
//   if(!error){
//     setTimeout(() => {
//       console.log('promise six start')
//       resolve(['jun','is','true',false,67])// this connects with .then
//       }, 1000);
// }else{
//   reject();
// }
  
// }).then((user)=>{
//   console.log(user[2]);
//   console.log(typeof(user[3]))
// }).catch(()=>{
//   console.log('error catch')
// }).finally(()=>{
//   console.log('promise is either resolve or reject')
// })

const promise6=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username:'js',password:'123'})
    }else{
      reject('Error:Js went wrong')
    }
  },1000)
});
async function consumePromise6(){
  try{
    const response=await promise6;
    console.log(`response:${response}`)
  }catch(error){
    console.log(error)
  }
  
}
consumePromise6()

// async function getAllUsers(){
//   try{

//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//    // console.log(response)
//     const data=await response.json();//it takes time to convert
//     console.log(data)
//   }catch(error){
//     console.log("E :",error)
//   }
 
// }
// getAllUsers()
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
  return res.json()
}).then((data)=>{
  console.log(data)//chaining
})
.catch((error)=>{
  console.log(error)

})

{/*resoponse=fetch('something'
                    | 
                 reserves space in meomory   data|web browser/node
                      |     |
                      data    network request
                  */}