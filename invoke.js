//imediately invoked function expression(IIfE)

//named iife
(function child(){
  console.log('db connected')
})();
//to remove the pollution of the global scope we use iife

//unname iife

((name)=>{
  console.log(`${name} drink tea`)
})('jun');

((a,b,c)=>{
  console.log(a+b+c)
})(4,5,6)