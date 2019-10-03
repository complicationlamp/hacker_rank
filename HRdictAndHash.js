


function twoStrings(s1, s2) {
    let str1 = s1.split("").sort()
    let str2 = s2.split("").sort()
    // let smallerd, bigger;

    // if(str1.length >str2.length){
    //     bigger = str1;
    //     smaller = str2;
    // } else{
    //     bigger=str2;
    //     smaller= str1;
    // }

    for(let i =0; i< str1.length; i++){
        let target = str2.indexOf(str1[i]);
        if(target != -1){
            return 'YES';
        }
    }
    return 'NO'
    
}   
console.log(twoStrings("hello", "world"))