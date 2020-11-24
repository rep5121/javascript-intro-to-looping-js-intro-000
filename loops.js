function forLoop(array){
  for(let i = 0; i < 25; i++){
    if( i > 1){
      array.push(`I am ${i} strange loops.`)
      }

    else{
      array.push(`I am ${i} strange loop.`)
      }
  }
  return array
}


function whileLoop(n){
  while(n > 0){
    console.log (n);
    n--
  }
  return "done"
}


let i = 0;
function doWhileLoop(num){
  do{
    i= i+ 1;
    console.log("I run once regardless.");}
  while( i<= num)
}

doWhileLoop(0);
doWhileLoop(10);
