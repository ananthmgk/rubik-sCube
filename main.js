function leftOperation(cube) {
  cube.splice(4,0,cube[0]);
  cube.shift();
  return cube;
}

console.log(leftOperation(['W','O','Y','R','G','B']));

function rightOperation(cube) {
  cube.splice(0,0,cube[3]);
  cube.splice(4,1)
  return cube;
}

console.log(rightOperation(['W','O','Y','R','G','B']));


function topOperatiom(cube) {
  let cubeCopy = cube.slice(0); 
  let newArr  = [];
  for(let c of cube) {
      if(c === cube[0]) {
          newArr.push(cubeCopy[0] = cubeCopy[5]);
      }
      else if(c === cube[4]) {
          newArr.push(cube[4] = cube[0]);
      }
      else if(c === cube[2]) {
          newArr.push(cubeCopy[2] = cubeCopy[4]);
      }
      else if(c === cube[5]) {
          newArr.push(cube[5] = cube[2]);
      }
      else newArr.push(c);
  }
  return newArr;
}

console.log(topOperatiom(['W','O','Y','R','G','B']));


function bottomOperatiom(cube) {
  let cubeCopy = cube.slice(0); 
  let newArr  = [];
  for(let c of cube) {
      if(c === cube[5]) {
          newArr.push(cube[5] = cube[0]);
      }
      else if(c === cube[0]) {
          newArr.push(cubeCopy[0] = cubeCopy[4]);
      }
      else if(c === cube[4]) {
          newArr.push(cube[4] = cube[2]);
      }
      else if(c === cube[2]) {
          newArr.push(cubeCopy[2] = cubeCopy[5]);
      }
      else newArr.push(c);
  }
  return newArr;
}

console.log(bottomOperatiom(['W','O','Y','R','G','B']));
