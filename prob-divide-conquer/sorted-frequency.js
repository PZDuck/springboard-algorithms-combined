function sortedFrequency(arr, target) {
    // dynamic variables used during looping
    let leftIdx = 0
    let rightIdx = arr.length - 1
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    
    // "static" (not really) variables, used to store the final results.
    let left, right
    left = leftIdx
    right = rightIdx

    // find the left index
    while (!(arr[middleIdx - 1] < target && arr[middleIdx] === target)) {

        if (middleIdx === 0) {
            leftIdx = middleIdx
            break
        } else if (leftIdx === arr.length) {
            return -1
        }
        
        if (arr[middleIdx] < target) {
            leftIdx = middleIdx + 1
        } else if (arr[middleIdx] >= target) {
            rightIdx = middleIdx - 1
        }

        middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    }
    
    // capture the left index
    left = leftIdx

    // reset the dynamic variables. Keep the left index to reduce work
    rightIdx = arr.length - 1
    middleIdx = Math.floor((leftIdx + rightIdx) / 2)

    // find the right index
    while (!(arr[middleIdx + 1] > target && arr[middleIdx] === target)) {
        if (middleIdx === arr.length - 1) {
            rightIdx = middleIdx
            break
        } else if (middleIdx === -1) {
            return -1
        }

        if (arr[middleIdx] > target) {
            rightIdx = middleIdx - 1
        } else if (arr[middleIdx] <= target) {
            leftIdx = middleIdx + 1
        }

        middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    }

    // capture the right index (one index ahead in reality, to eliminate the need of adding 1 in the end)
    right = rightIdx

    console.log(left, right)

    if (left === right) return 1

    return right - left
}

module.exports = sortedFrequency