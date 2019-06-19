// Business Logic
function Player (symbol){
  this.symbol = symbol;
}

var playerX = new Player("X");
var playerO = new Player("O");

function Square (row, column){
  this.row = row;
  this.column = column;
  this.symbol;
}

var square11 = new Square("1","1")
var square12 = new Square("1","2")
var square13 = new Square("1","3")
var square21 = new Square("2","1")
var square22 = new Square("2","2")
var square23 = new Square("2","3")
var square31 = new Square("3","1")
var square32 = new Square("3","2")
var square33 = new Square("3","3")

var currentPlayer = playerX;

// User Interface Logic

$(function(){
  $("#11").click(function(){
    square11.symbol = currentPlayer.symbol
    alert(square11.symbol);
  })
  $("#11").click(function(){
    square11.symbol = currentPlayer.symbol
    alert(square11.symbol);
  })
})
