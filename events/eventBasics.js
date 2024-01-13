//old approach
//document.getElementById('sunflower').onclick=function(){
 // alert('clicked')
  //console.log('clicked sunflower')
//}
{/*document.querySelector('#lady').addEventListener('click',function(e){
  alert('clicke lady');
  console.log('clicke lady')
})*/}
//new appraoch
document.querySelector('#stars').addEventListener('click',function(e){
  //console.log('clicked stars');
  //alert('starts clicked')
})

document.querySelector('#google').addEventListener('click',function(e){
  e.preventDefault(); //this will not redirect you to google pages
  //console.log('google clicked')

})

document.querySelector('.images').addEventListener('click',function(e){
  //console.log(e.target.id);           //thid will remvoe all ul if you click outsideimg
  //const remove=e.target.parentNode;
  //remove.remove();

});
document.querySelector('.images').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.tagName==="IMG"){
    console.log(e.target.tagName)
    const rmv=e.target.parentNode;
    rmv.remove();
  }
})