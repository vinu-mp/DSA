// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

 

// Example 1:

// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
// Example 2:

// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
// Example 3:

// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].


var findMinArrowShots = function(points) {
  // Sort by start
  points.sort((a, b) => a[0] - b[0]);
  let arw = 0, i=1, interval = [];
  for(let [start, end] of points) {
      if(interval.length) {
          if(start <= interval[1]) {
              // find intersection
              let newStart  = interval[0] < start ? start : interval[0];
              let newEnd = interval[1] < end ? interval[1] : end;
              interval = [newStart, newEnd];
          } else {
              interval = [start, end];
              arw++;
          }
      } else {
          interval = [start, end];
          arw++;
      }
  }
  return arw;

  // Sort by end
  // points.sort((a, b) => a[1] - b[1]);
  // let end = points[0][1];
  // let arw = 1, i=1;
  // while(i < points.length) {
  //     if(points[i][0] > end) {
  //         end = points[i][1]
  //         arw++;
  //     }
  //     i++;
  // }
  // return arw
};