function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let position = i

        while (position > 0 && arr[position - 1] > currentValue) {
            arr[position] = arr[position - 1]
            position = position - 1
        }

        arr[position] = currentValue
    }

    return arr
}

insertionSort([5,4,7,12,36,23,55,25,76,82,1,9])

module.exports = insertionSort;