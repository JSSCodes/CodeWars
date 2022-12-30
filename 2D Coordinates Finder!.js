// Task
// Given a plane and numbers on or around that plane, return the coordinates of those numbers.

// Input
// plane: a string, representing a plane in 2D perspective. The string is delimited by newline '\n' and each line has the same length. The string contains numbers, ranging from 0 to at most 9. There will be at least 1 and at most 10 numbers in the string. Numbers will not contain gaps and always start with 0. If, for instance, there are 3 numbers, they will be [0, 1, 2]. Those numbers can be in the plane or around it. The coordinate system around the plane is the same as in the plane.
// Output
// return an array of 2-ples, with each 2-ple representing the Y- and X-coordinates of the corresponding number in that array. For instance, [[0, 0], [1, 0]] represents coordinates [0, 0] for number 0 and coordinates [1, 0] for number 1.

function findCoordinates(plane) {

    const cols = plane.indexOf("\n");
    const seq = plane.split("\n").reverse().join('');
    const regex = /\d/g;
    
    let coords = [];
    let x, y, match;
  
    while (match = regex.exec(seq))  {
      y = Math.floor(match.index / cols);
      x = (match.index % cols - y - 1) / 2;
      coords[+match[0]] = [y, x]
    }
  
    return coords;
    
  }