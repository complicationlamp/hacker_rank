function diagonalDifference(arr) {
	// Write your code here
	let down = 0
	let up =0
	let n =arr[0].length -1
	for(let i=0; i < arr[0].length; i++){
		down += arr[i][i]
		up +=arr[i][n-i]
	}
	return Math.abs(down-up)
}

const matrix= [[11, 2, 4],
[4, 5, 6],
[10, 8, -12]]
console.log(diagonalDifference(matrix))
