var newAccount = function(investment) {

  this.balance = investment;

  this.numBottles = 0;

  this.totalBottles = 0;

  this.numEmptyBottles = 0;

  this.numCaps = 0;

  this.addBottlesFromBalance = function() {
    this.numBottles = Math.floor(this.balance / 2);
    this.totalBottles += this.numBottles;
    this.balance -= this.numBottles * 2;
  }

  this.addEmptyBottlesAndCapsFromBottles = function () {
      this.numEmptyBottles += this.numBottles;
      this.numCaps += this.numBottles;
      this.numBottles -= this.numBottles;
   }

  this.addBottlesFromEmptyBottles = function () {
    this.numBottles += Math.floor(this.numEmptyBottles / 2);
    this.totalBottles += Math.floor(this.numEmptyBottles / 2);
    this.numEmptyBottles -= 2 * Math.floor(this.numEmptyBottles / 2);
  }

  this.addBottlesFromCaps = function () {
    this.numBottles += Math.floor(this.numCaps / 4);
    this.totalBottles += Math.floor(this.numCaps / 4);
    this.numCaps -= 4 * Math.floor(this.numCaps / 4);
  }

  this.getMostBottles = function () {
    while (this.balance >= 2 || this.numEmptyBottles >= 2 || this.numCaps >= 4) {
      this.addBottlesFromBalance();
      console.log("by balance:", this.balance, this.numBottles, this.numEmptyBottles, this.numCaps, this.totalBottles)
      this.addBottlesFromCaps();
      console.log("by Caps:", this.balance, this.numBottles, this.numEmptyBottles, this.numCaps, this.totalBottles)
      this.addBottlesFromEmptyBottles();
      console.log("by Empty Bottles:",this.balance, this.numBottles, this.numEmptyBottles, this.numCaps, this.totalBottles)
      this.addEmptyBottlesAndCapsFromBottles();
      console.log("add Empty Bottles:", this.balance, this.numBottles, this.numEmptyBottles, this.numCaps, this.totalBottles)
    }
  }
}

var account = new newAccount(6);
account.getMostBottles();
account
