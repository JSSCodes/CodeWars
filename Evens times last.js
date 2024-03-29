// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


const evenLast = numbers => {
    const even = numbers.filter((a, i) => i % 2 == 0);
    return even.reduce((acc, val) => val * numbers[numbers.length-1] + acc, 0);
  };
  