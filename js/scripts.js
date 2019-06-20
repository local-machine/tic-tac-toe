// Business Logic
function Player (symbol){
  this.symbol = symbol;
}

function Square (row, column){
  this.row = row;
  this.column = column;
  this.symbol;
}

Square.prototype.mark = function (player) {
  this.symbol = player.symbol;
}

var playerX = new Player("X");
var playerO = new Player("O");

var currentPlayer = playerX;

var squares = [];

for (var row = 1; row <= 3; row++) {
  for (var col = 1; col <= 3; col++) {
    var newSquare = new Square (row, col);
    squares.push(newSquare);
  }
}
var markSquare = function(uniqueId){
  squares.forEach(function(square){
    if (uniqueId == squares.indexOf(square)){
      square.mark(currentPlayer);
    } else {
      return;
    }
  });
}
// User Interface Logic

$(function(){
  $(".grid-item").click(function(){
    var uniqueId = $(this).prop('id');
    markSquare(uniqueId);
  })
});
