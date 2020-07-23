function largestSubarraySum (array){
    let largestSum =0
    let currentSum=0

    for (let number of array){
        currentSum=Math.max(0, currentSum+number)
        largestSum=Math.max(largestSum, currentSum)
    }

    return largestSum
}