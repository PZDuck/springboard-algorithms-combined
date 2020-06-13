function merge(arr1, arr2) {
    let out = []
    let a = 0
    let b = 0

    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
            out.push(arr1[a])
            a++
        } else {
            out.push(arr2[b])
            b++
        }
    }

    if (a < arr1.length) {
        for (let i = a; i < arr1.length; i++) {
            out.push(arr1[i])
        }
    }

    if (b < arr2.length) {
        for (let i = b; i < arr2.length; i++) {
            out.push(arr2[i])
        }
    }

    return out
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

module.exports = { merge, mergeSort};