function sockMerchant(n, ar) {
    let x= ar.sort()
    let count =0;
    while(x.length){
        if(x[0] == x[1]){
            count +=1;
            x.shift();
            x.shift();
        }
        else x.shift();
    }
    return count
}

// console.log(sockMerchant(9,[1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))


//////////////////
//counting valleys
//////////////////


function countingValleys(n, s) {
    let h = 0;
    let count = 0;
    
    for(var i = 0; i < n; i++) {
      if(s.charAt(i) === "D" && h == 0) {
        count++;
        h--;
      } else if (s.charAt(i) === "D" && h !== 0) {
        h--;
      } else if (s.charAt(i) === "U") {
        h++;
      }
    }
    return count;

}
                            //    1,0,-1,-2,-1,-2,-1,0
console.log(countingValleys(8,"UDDDUDUU"))


/////////////////////////
// Repeated String
///////////////////////

function repeatedString(s, n) {
  let x = Math.floor(n / s.length);
  //the abount of full s strings that will go into n 3 in this example
  let count = (s.split("a").length - 1) * x;
  //number of 'a's in the string 2 in this case,then mytipled buy the number of times it goes into the string
  let rem = n % s.length;
  //rem is the remainder of whats left over, in this case it's 1 10/3 -3 ==1/3 ...1/3* s.length(3) =1

  for (var i = 0; i < rem; i++) 
  //this will loop over the remaining bit of string
  {
      if (s.charAt(i) === "a") {
          count++;
      }
  }
  return count;
}
let s ="aba"
let n =10
console.log(repeatedString(s, n))