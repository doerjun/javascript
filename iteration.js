// for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if(element%2===0){
    console.log(element)
    continue;
  }
  console.log('odd',element)
  }

for(let i=0;i<=10;i++){
 // console.log(`outer loop ${i}`)
  for(let j=0;j<=10;j++){
    //console.log(`inner loop ${j} and inner loop ${i}`)
    //console.log(i+'* '+j+'='+i*j)
  }
}
let myArray=['flash','batman','superman']
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element)
  
}
//break continue
for (let index = 1; index <=20; index++) {
  //console.log(`value of i is ${index}`)
  if(index==5){
    //console.log('detached 5')
    break
  }
  
}
for(let i=1;i<=20;i++){
  if(i==5){
    console.log('detached 5')
    break
  }
  console.log(`value of i is ${i}`)

}
