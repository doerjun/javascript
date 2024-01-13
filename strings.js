 const name='jun'
 const repoCount=23
 console.log(`Hello my nme is ${name} and my repo count is ${repoCount}`)

 //behind the scene its invoking the object
 const gameName='ju-nm-gar'
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4))
 console.log(gameName.indexOf('a'))
 const newString=gameName.substring(1,5);
 console.log(newString);

 const anotherString =gameName.slice(-7,4);
 console.log(anotherString);

 //trim or replace
 const newStringOne=' jun  '
 console.log(newStringOne);
 console.log(newStringOne.trim())

 const url='https://jun.com%45'
// url.replace('%45','_')
 console.log(url.replace('%45','*'))
 console.log(url.includes('om'))
 console.log(gameName.split('-'))