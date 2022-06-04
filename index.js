function range() {
let stage = 0 
  let name = prompt('username: ');
  let userName = 'username'
   //generating a random integer from 1 to 2
const random = Math.floor(Math.random() * 1) + 2;

 //take random number from the user 
  let number = parseInt(prompt('guess a number from 1 to 2: '));

  while (random !== number) {
    number = parseInt(prompt('guess a number from 1 to 2: '));
  }
  if (number === random) {
    console.log('Correct, Next stage!');
  } 

  else 
    'end game' 
  
while (random !== stage) {
  stage = stage + 1;
  } 
 }
  //call the function
  range( + 1);