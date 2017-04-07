var exportMe = function () {
  console.log("I am being exported.");
  console.log(hiddenMessage());
}

var hiddenMessage = function() {
  console.log("I am not exported but you can still hear me...");
}

module.exports = {
  exportMe: exportMe
}

