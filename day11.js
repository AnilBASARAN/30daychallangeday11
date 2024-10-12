/* intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements. */

const intersection = (a, b) => {

    let inter = {};
    let result = [];
    for(let num of a){
      if(!(num in inter)){
        inter[num] = true;
      }
    }
    
    for(let num of b){
      if(num in inter) result.push(num);
    }
    return result;
  };