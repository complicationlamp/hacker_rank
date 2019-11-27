function miniMaxSum(arr) {
	let sortedArr = arr.sort((a,b)=>(a-b))
	let sum = arr.reduce((a,b)=>(a+b))
	let min=sum-sortedArr[sortedArr.length -1]
	let max = sum-sortedArr[0]
	console.log(min, max)
	// return arr.reduce((a,b)=>(a+b))

}


console.log(miniMaxSum([1, 2, 3, 4, 5]))