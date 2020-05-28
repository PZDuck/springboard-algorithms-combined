function findFloor(arr, num) {
    let low = 0
    let high = arr.length - 1
    let mid

    while (low !== high) {
        mid = Math.floor((low + high) / 2)
        console.log("LOW", low, "HIGH", high, "MID", mid)

        if (arr[mid] === num) return arr[mid]

        if (arr[mid - 1] <= num && num < arr[mid]) return arr[mid - 1]

        if (arr[mid + 1] > num && arr[mid] <= num) return arr[mid]

        if (arr[mid] > num) {
            high = mid - 1
        } else {
            if (arr[high] <= num) {
                low = mid + 1
            } else {
                high = mid + 1
            }
        }
    }

    if (arr[low] > num) return -1
    else return arr[high]

}
module.exports = findFloor