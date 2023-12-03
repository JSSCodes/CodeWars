// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(s,d){
    return s<0||d<0||s<d?null:[(s+d)/2,(s-d)/2];
  };