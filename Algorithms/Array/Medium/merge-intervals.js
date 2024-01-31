// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
  let i=1, res = [], tracker = 0;
  let sortedIntervals = intervals.sort((a, b) => a[0]- b[0]);
  res[0] = sortedIntervals[0];
  while(i < sortedIntervals.length) {
      let currentEnd = res[tracker][1];
      let newStart = sortedIntervals[i][0];
      if(currentEnd >= newStart) {
          let newEnd = sortedIntervals[i][1] > currentEnd ? sortedIntervals[i][1] : currentEnd;
          res[tracker] = [res[tracker][0], newEnd];
      } else {
          res.push(sortedIntervals[i]);
          tracker++;
      }
      i++;
  }
  return res;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))