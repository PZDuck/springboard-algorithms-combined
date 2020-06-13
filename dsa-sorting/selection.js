function selectionSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let posOfMax = 0

        for (let j = 1; j < i + 1; j++) {
            if (arr[j] > arr[posOfMax]) posOfMax = j
        }

        let temp = arr[i]
        arr[i] = arr[posOfMax]
        arr[posOfMax] = temp
    }
    
    return arr
}

module.exports = selectionSort;