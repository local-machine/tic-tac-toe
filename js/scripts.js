// Business Logic ---------------------
var winner = false;

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

var squares = [];    // Creates array of 9 Square objects w/ row and col
for (var row = 1; row <= 3; row++) {
  for (var col = 1; col <= 3; col++) {
    var newSquare = new Square (row, col);
    squares.push(newSquare);
  }
}

var markSquare = function(clickedSqId){    // Marks clicked square with current player's symbol
  squares.forEach(function(square){
    if (clickedSqId == squares.indexOf(square)){
      square.mark(currentPlayer);
    } else {
      return;
    }
  });
}

var determineWin = function() {
  if (squares[0].symbol === squares[4].symbol && squares[4].symbol === squares[8].symbol) {
    winner = true;
  } else if (squares[2].symbol === squares[4].symbol && squares[4].symbol === squares[6].symbol) {
    winner = true;
  } else if (squares[0].symbol === squares[1].symbol && squares[1].symbol === squares[2].symbol) {
    winner = true;
  } else if (squares[3].symbol === squares[4].symbol && squares[4].symbol === squares[5].symbol) {
    winner = true;
  } else if (squares[6].symbol === squares[7].symbol && squares[7].symbol === squares[8].symbol) {
    winner = true;
  } else if (squares[0].symbol === squares[3].symbol && squares[3].symbol === squares[6].symbol) {
    winner = true;
  } else if (squares[1].symbol === squares[4].symbol && squares[4].symbol === squares[7].symbol) {
    winner = true;
  } else if (squares[2].symbol === squares[5].symbol && squares[5].symbol === squares[8].symbol) {
    winner = true;
  } else {
    winner = false;
  }
}


// User Interface Logic --------------------

$(function(){
  $(".grid-item").click(function(){
    var clickedSqId = $(this).prop("id");
    markSquare(clickedSqId);
  })

  //somewhere
  determineWin();
});
