var maxProfit = function(arr) {
  if (arr.length < 2) {
    try {
      throw new Error("The array must contain at least 2 numbers");
    } catch (e) {
      console.log(e.name + ": " + e.message);
    }
  }
  var max = arr[arr.length-1] - arr[arr.length-2] ;
  for (var i = arr.length - 3; i >= 0; i--) {
    var num = arr.slice(i + 1, arr.length - 1).sort(function(a,b) {return b - a;})[0] - arr[i];
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(maxProfit([45]));//, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 24]));
console.log(maxProfit([45, 24, 4, 3, 2, 1]));
console.log(maxProfit([45, 24, 24, 24, 24, 24]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));