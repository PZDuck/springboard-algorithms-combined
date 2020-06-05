/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i === words.length) return 0
  return Math.max(words[i].length, longest(words, i + 1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, modified="", i=0) {
  if (i >= str.length) return modified
  modified += str[i]
  return everyOther(str, modified, i + 2)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0, right=str.length-1) {
  if (left >= right) return true
  if (str[left] !== str[right]) return false
  return true && isPalindrome(str, left + 1, right - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1
  if (arr[i] === val) return i
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, modified="", i=str.length-1) {
  if (i === 0) return modified + str[0]
  modified += str[i]
  return revString(str, modified, i - 1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1, i=Math.floor((left + right) / 2)) {
  if (left > right) return -1
  if (arr[i] === val) return i
  return (val > arr[i]) ? binarySearch(arr, val, i + 1, right, Math.floor((left + right) / 2)) : binarySearch(arr, val, left, i - 1, Math.floor((left + right) / 2))
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
