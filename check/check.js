var check = function(x) {
  // validate
  var arr = String(x).split("").map(Number);
  if (arr.length !== 11) {
    throw Error("Input must be 11-digit long.");
  }

  arr.reverse()
  var sum = 0;
  for (var i in arr) {
    if ( i % 2 !== 0 ) {
      sum += String(2*arr[i]).split("").map(Number).reduce(function(a,b){return a + b;});
    }
    else {
      sum += arr[i];
    }
  }
  return sum % 10 === 0;
}

var arr = [79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719];
console.log(arr.map(check))
//console.log(arr.map(check));