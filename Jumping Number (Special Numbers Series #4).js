// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series

function jumpingNumber(n){
    return [...n+''].every((x,i,a)=>!i||x==+a[i-1]+1||x==a[i-1]-1)?'Jumping!!':'Not!!'
  };
  