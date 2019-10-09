function plusMinus(arr) {
	// let pos =0,neg =0,zer =0;
	// let len = arr.length 
	// for(let i of arr){
	// 	if(i>0){
	// 		pos++
	// 	}else if(i<0){
	// 		neg++
	// 	}else{
	// 		zer++
	// 	}
	// }
	// let a = (pos/len), b =(neg/len),c =(zer/len)

	// return {a, b, c}
// }
	let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}



const ar=[-4, 3, -9, 0, 4, 1]
console.log(plusMinus(ar))