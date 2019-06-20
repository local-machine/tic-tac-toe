// Business Logic ---------------------
var winner = false;

function Player (symbol, name){
  this.symbol = symbol;
  this.name = name;
}

function Square (row, column){
  this.row = row;
  this.column = column;
  this.symbol;
}

Square.prototype.mark = function (player) {
  this.symbol = player.symbol;
}

var playerX = new Player("X", "Player X");
var playerO = new Player("O" ,"Player O");
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

var winCombos = [
  [0,4,8],
  [2,4,6],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]

var determineWin = function() {
  for (var i = 0; i <= 7; i++) {
    var symbol1 = (squares[winCombos[i][0]]).symbol;
    var symbol2 = (squares[winCombos[i][1]]).symbol;
    if ((symbol1 && symbol2) && (symbol1 === symbol2)){ // if two squares have the same symbol
      var symbol3 = (squares[winCombos[i][2]]).symbol;
      if (symbol3 && (symbol2 === symbol3)) { // compare 3rd square for the same symbol
        return winner = true;
      }
    }
  }
}

var switchPlayer = function(){    // Switches to other user upon passing turn
  if (currentPlayer === playerX){
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
}


// User Interface Logic --------------------

$(function(){
  $(".grid-item").click(function(){
    var clickedSqId = parseInt($(this).prop("id"));
    var symbolPresent = (squares[clickedSqId]).symbol;
    if (symbolPresent === "X" || symbolPresent === "O") {
      return;
    } else {
      markSquare(clickedSqId);
      $("#" + clickedSqId).text(currentPlayer.symbol);
      determineWin();
      switchPlayer();
      if (winner === true) {
        switchPlayer();
        alert(currentPlayer.name + " wins!!!!")
      }
    }
  })
});
