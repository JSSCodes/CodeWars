// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // had to use The toLowerCase() method (returns the calling string value converted to lower case)
    // abBa example came out as false
    x = x.toLowerCase();
    const checker = x.split('').reverse().join('');
    if (checker === x){
      return true;
      
    } else{
      
      return false;
    }
  }