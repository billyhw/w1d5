function isPalindrome(s) {
  s = s.replace(/\s/g, "");
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;
