// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// For example, if  and , we can delete  from string  and  from string  so that both remaining strings are  and  which are anagrams.

// Function Description

// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

// makeAnagram has the following parameter(s):

// a: a string
// b: a string
// Input Format

// The first line contains a single string, .
// The second line contains a single string, .





function makeAnagram(a, b) {
    var aChars = a.split("");
    var bChars = b.split("");
  
    // determin what is the larger array and make it outer
    if (aChars.length > bChars.length) {
      var outer = aChars;
      var inner = bChars;
    } else {
      var outer = bChars;
      var inner = aChars;
    }
    // starting at the back, last index, of the larger array
    var outerIndex = outer.length-1;
    while (inner.length > 0 && outer.length > 0 && outerIndex >= 0) {
        //this will look for a charcter that is the same as the last in outer
      let innerIndex = inner.indexOf(outer[outerIndex]);
      //if the charcter is found endter statement
      if (innerIndex !== -1) {
        //remove the idex of the matching charcters
        outer.splice(outerIndex, 1);
        inner.splice(innerIndex, 1);
      }
      --outerIndex;
    }
    return outer.length + inner.length
}

// console.log(makeAnagram('abc','cde'))



function alternatingCharacters(s) {
    let str = s.split('')
    // return str
    let count=0;
    for(let i = 0; i< str.length; i++){
        console.log(str[i])
        if(str[i]==str[i+1]){
            count ++
        }
    }
    return count;
}

console.log(alternatingCharacters('ababababa'))