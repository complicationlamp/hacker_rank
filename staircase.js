function staircase(n) {
	let str =""
	let base =""
	let add ="#"
	for(let i = 0; i< n; i++){
		base += " "
	}
	for(let i =0; i<n; i++){
		console.log(base.slice(0,n-i-1) + add)
		add +="#"
	}
	return str
}


console.log(staircase(6))