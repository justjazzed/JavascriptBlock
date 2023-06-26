function findLongestDistance(N, blocks) {
  
  
  let J = 0; 
  let K = N - 1; 
  let H = 0; //height


  let i = N - 1

  while (i >= 0) {
    if (blocks[i] > H) {
      H = blocks[i];
      J = i;
    } else if (blocks[i] === H) {
      J = i;
    }
    i--;
  }

  H = 0; 

  
  for (let i = N - 1; i >= 0; i--) {
    if (blocks[i] > H) {
      H = blocks[i];
      K = i;
    } else if (blocks[i] === H) {
      K = i;
    }
  }

  const longestDistance = Math.max(K - J + 1, H); // for distance

  return longestDistance;

}
const N = 6; 
const blocks = [2, 6, 8, 5, 9 , 10]; 
const longestDistance = findLongestDistance(N, blocks);
console.log(`The Distance between them: ${longestDistance}`);