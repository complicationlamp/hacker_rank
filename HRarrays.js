//hourglass

function hourglassSum(x) {
    // console.log(x.length)
    // const y = x.length
    let ans =[]
    for(let i=0;i<=x.length-3;i++){
        //should probably stop 2 rows befor the end
        // console.log(x[i].length)
        for(let j =0;j<x[i].length-2; j++){
            //my thought is to just add the next two and stop the loop 2 befor the end
            // console.log(x[i][j])
            let theI= (x[i][j] + x[i][j+1] + x[i][j+2] + x[i+1][j+1] + x[i+2][j] + x[i+2][j+1] + x[i+2][j+2]);
            ans.push(theI)
        };
    }
    ans.sort((a,b)=> a-b);
    console.log(ans)
    return ans.pop()
    // return Math.max.apply(Math, ans);

}


let arr=[[1,2,3],[4,5,6],[7,8,9]]

let bigArr=[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0,],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]]

console.log(hourglassSum(bigArr))


////////////////////////////////////////////////////////////
// Arrays, left rotation
// ////////////////////////////////////////////////////////////
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

////////////////////////////////////////////////////////////


function rotLeft(a, d) {
    for (let i=0; i< d; i++){
        let x= a.shift();
        a.push(x)
    }
    return(a)

}

// console.log(rotLeft([1,2,3,4,5], 4))