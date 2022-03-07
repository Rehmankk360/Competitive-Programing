/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
 let copy = matrix.slice()
   let ans= [];
for(let i = 0;i< copy.length; i++){
  let single = [];
  let length_minus = copy.length
for(let j = 0;j< copy.length; j++){
  let pushed = false
if(!ans.includes(single)){
  single.push(copy[length_minus - 1][i])
  pushed = true
}
if(pushed){
  length_minus -= 1
}
}
ans.push(single)
matrix[i] = single
}
 
return matrix
};