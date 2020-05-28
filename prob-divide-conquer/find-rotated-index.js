function findRotatedIndex(arr, num) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[mid] === num) {
            return mid
        }

        // determine where the rotation takes place
        if (arr[mid] >= arr[low]) {   // the smallest number is on the right half
            if ((arr[low] <= num) && (num < arr[mid])) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {    // the smallest number is on the left half
            if ((arr[mid] < num) && (num <= arr[high])) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }

    return -1
}
[8,9,1,2,3,4,5,6,7]
module.exports = findRotatedIndex