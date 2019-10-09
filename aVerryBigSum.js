function aVeryBigSum(ar) {
	let sum =0
	for(let i of ar){
		sum +=i
	}
	return sum
}



console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))