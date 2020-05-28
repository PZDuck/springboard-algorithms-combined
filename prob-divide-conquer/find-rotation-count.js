function findRotationCount(arr) {
    let low = 0
    let high = arr.length - 1

    while (low !== high) {
        let mid = Math.floor((low + high) / 2)

        
        if (arr[mid] < arr[low]) {
            high = mid
        } else {
            if (arr[mid] < arr[high]) {
                high -= 1
            } else {
                low = mid + 1
            }
        }
        console.log("LOW", low, "HIGH", high)
    }

    return low
}

module.exports = findRotationCount