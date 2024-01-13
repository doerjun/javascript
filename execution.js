//jEc
//global execution contex
//function execution context
//eval execution context

//memory creation phase->allocate memory mcp
let a=10;
let b=5;    //global execution phase->this 1

//memory phsae a->undefined{memory phase} 2
//  b->undefined

//addnum->definition
//result1->undefined
//result2->undefined this all is first cycle
function addNum(num1,num3){
  let total=num1+num3;
  return total
}
let result1=addNum(a,b);
let result2=addNum(4,6)

//execution phase-> 3
//a-10 b=5 
//addnum->no work cause you already definede in the memory phase
//addnum->[execution context new variable environment+extution thread]->you can delete it as well
//execution context a=10 b=5 total->15
//|
//memory phase ->a=undefined b->undefined total->undefined
//execution context->num1->10 num->5 total->15


//call stack
//lifo last in first out
