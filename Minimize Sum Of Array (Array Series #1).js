// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size

function minSum(arr){
    return arr.sort( (a,b) => a-b )
    .slice(0, arr.length/2)
    .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  };