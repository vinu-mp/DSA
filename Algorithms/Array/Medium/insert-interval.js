// 57: Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

var insert = function(intervals, newInterval) {
  let res = [], i=0, hasMerged = false, tracker = 0;
  if(intervals.length === 0) return [newInterval];
  
  while(i < intervals.length) {
      let comparer = hasMerged ? intervals[i] : newInterval;
      let base = hasMerged ? res[res.length - 1] :  intervals[i];

      let comparerStart = comparer[0];
      let comparerEnd = comparer[1];
      let baseStart = base[0];
      let baseEnd = base[1];
      if(comparerEnd < baseStart) {
          hasMerged = true;
          res.push(newInterval, intervals[i]);
          tracker++;
      }
      else if(comparerStart <= baseEnd) {
         hasMerged = true;
         let newEnd = comparerEnd > baseEnd ? comparerEnd: baseEnd;
         let newStart = comparerStart < baseStart ? comparerStart: baseStart;
         res[tracker] = [newStart, newEnd];
      } else {
          res.push(intervals[i]);
          tracker++;
      }
      i++;
  }
  !hasMerged && res.push(newInterval);
  return res;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))