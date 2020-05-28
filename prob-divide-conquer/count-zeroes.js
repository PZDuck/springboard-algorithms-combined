function countZeroes(arr) {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  let middleIdx
  
  while (leftIdx <= rightIdx) {
      middleIdx = Math.floor((leftIdx + rightIdx) / 2)
      let middleVal = arr[middleIdx]
      if(middleVal === 1) {
          leftIdx = middleIdx + 1
      } else if (middleVal === 0) {
          rightIdx = middleIdx - 1
      } 
  }
  return arr.length - rightIdx - 1
}


module.exports = countZeroes