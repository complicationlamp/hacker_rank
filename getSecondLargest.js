function getSecondLargest(nums) {
  // Complete the function
  let sorted = nums.sort((a, b) => b - a)
  let removed =sorted.filter(x=> x<sorted[0])
  return removed[0] ;
}

console.log(getSecondLargest([2, 3, 6, 6, 5,7]));
