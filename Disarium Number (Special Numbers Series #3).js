// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series

function disariumNumber(n){
    let number = n.toString();
    let sum = 0;
    for (let i=0; i<number.length; i++){
        
      sum += Math.pow(number[i], i+1);
    }
    return n === sum ? "Disarium !!" : "Not !!";
  };