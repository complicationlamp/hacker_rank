function birthdayCakeCandles(ar) {
    let target =ar.sort((a,b)=>b-a)
    return ar.filter(number => number ===target[0]).length
}

console.log(birthdayCakeCandles([4,4,1,3]))