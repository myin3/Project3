var mouse = false;
var gridWidth = 600;
const grid = document.querySelector('.grid');
grid.addEventListener('mousedown', function(){mouse = true});
document.body.addEventListener('mouseup', function(){mouse = false});
grid.style.width = gridWidth + "px";
grid.style.height = gridWidth + "px";
var genID = document.getElementById('gen');
var generation = 0;
var height = grid.offsetHeight;
var width = grid.offsetWidth;
var interval;
var col = Math.floor(width / 10);
var row = Math.floor(height / 10);
var currentArray = [];
var nextArray = [];
for (var i = 0; i < row; i++) {
  for (var j = 0; j < col; j++) {
    var cell = document.createElement('div');
    cell.setAttribute("class","space dead")
    //cell.classList.add("space");
    //cell.classList.add("dead");
    cell.setAttribute('id', (i*row) + j);
    cell.innerHTML = "";
    cell.addEventListener('click', change);
    cell.addEventListener('mouseover', function(){
      if(mouse == true){
        this.setAttribute("class","space live")
      }
    });
    grid.appendChild(cell);
    //currentArray.push(cell);
  }
}

function checkStatus(){      
  for (var i = 0; i < row*col;/*currentArray.length;*/ i++) {
    let cellChecked = document.getElementById(i).classList;
    if(cellChecked[1] == "live"){
      currentArray[i] = 1;
    }
    else if (cellChecked[1] == "dead"){
      currentArray[i] = 0;
    }
  }
}

function checkNeighbor(){
  var count = 0;
  for (var i = 0; i < (row*col); i++) {
    if((i % col) == 0) {
      //FIRST COLUMN FIRST ROW
      if((i - row) < 0){ 
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
        //bottom-right
        if(currentArray[i + row + 1] == 1){
          count++;
        }
      }
      //FIRST COLUMN LAST ROW
      else if((i + row) > (row*col)){
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //top-right
        if(currentArray[i - row + 1] == 1){
          count++;
        }
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
      }
      //ANYTHING ELSE
      else{
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //top-right
        if(currentArray[i - row + 1] == 1){
          count++;
        }
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
        //bottom-right
        if(currentArray[i + row + 1] == 1){
          count++;
        }
      }
    }
    else if((i % col) == (col-1)) {
      //LAST COLUMN FIRST ROW
      if((i - row) < 0){ 
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
        //bottom-left
        if(currentArray[i + row - 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
      }
      //LAST COLUMN LAST ROW
      else if((i + row) > (row*col)){
        //top-left
        if(currentArray[i - row - 1] == 1){
          count++;
        }
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
      }
      //ANYTHING ELSE
      else{
        //top-left
        if(currentArray[i - row - 1] == 1){
          count++;
        }
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
        //bottom-left
        if(currentArray[i + row - 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
      }
    }
    else if((i + row) > (row*col)){
      //LAST ROW FIRST COLUMN
      if((i % col) == 0){
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //top-right
        if(currentArray[i - row + 1] == 1){
          count++;
        }
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
      }
      //LAST ROW LAST COLUMN
      else if((i % col) == (col-1)){
        //top-left
        if(currentArray[i - row - 1] == 1){
          count++;
        }
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
      }
      else{
        //top-left
        if(currentArray[i - row - 1] == 1){
          count++;
        }
        //top-middle
        if(currentArray[i - row] == 1){
          count++;
        }
        //top-right
        if(currentArray[i - row + 1] == 1){
          count++;
        }
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
      }
    }
    else if((i - row) < 0){ 
      //FIRST ROW FIRST COLUMN
      if((i % col) == 0){
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
        //bottom-right
        if(currentArray[i + row + 1] == 1){
          count++;
        }
      }
      //FIRST ROW LAST COLUMN
      else if((i % col) == (col-1)){
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
        //bottom-left
        if(currentArray[i + row - 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
      }
      //FIRST ROW ANY COLUMN
      else{
        //middle-left
        if(currentArray[i - 1] == 1){
          count++;
        }
        //middle-right
        if(currentArray[i + 1] == 1){
          count++;
        }
        //bottom-left
        if(currentArray[i + row - 1] == 1){
          count++;
        }
        //bottom-middle
        if(currentArray[i + row] == 1){
          count++;
        }
        //bottom-right
        if(currentArray[i + row + 1] == 1){
          count++;
        }
      }
    }
    else{
      //top-left
      if(currentArray[i - row - 1] == 1){
        count++;
      }
      //top-middle
      if(currentArray[i - row] == 1){
        count++;
      }
      //top-right
      if(currentArray[i - row + 1] == 1){
        count++;
      }
      //middle-left
      if(currentArray[i - 1] == 1){
        count++;
      }
      //middle-right
      if(currentArray[i + 1] == 1){
        count++;
      }
      //bottom-left
      if(currentArray[i + row - 1] == 1){
        count++;
      }
      //bottom-middle
      if(currentArray[i + row] == 1){
        count++;
      }
      //bottom-right
      if(currentArray[i + row + 1] == 1){
        count++;
      }
    }
    //alert("Count:" + count);
    if((currentArray[i] == 1) && (count < 2 || count > 3)){
      nextArray[i] = 0;
    }
    else if((currentArray[i] == 0) && (count == 3)){
      nextArray[i] = 1;
    } 
    else{
     nextArray[i] = currentArray[i]; 
    }
    count = 0;
  }
}
   
function setNeighbor(){
  for (var i = 0; i < (row*col); i++) {
    let element = document.getElementById(i);
    element.setAttribute('class', '');
   if(nextArray[i] == 0){
     element.classList.add('space');
     element.classList.add('dead');
     //var index = nextArray[i];
    //nextArray[i].setAttribute("class","space dead")
    //index.classList.add('space');
    //index.classList.add('dead');
   }
   else{
     element.classList.add('space');
     element.classList.add('live');
     //var index = nextArray[i];
     //nextArray[i].setAttribute("class","space live")
    //index.classList.add('space');
    //index.classList.add('live');
   }
  }
}
   
function block(){
  //left to right
  let randomCol = Math.floor(Math.random() * (col - 1));
  //up and down
  let randomRow = randomCol + (row * Math.floor(Math.random() * (row  - 1)));
  let right = randomRow + 1;
  let bottom = randomRow + row;
  let bottomRight = randomRow + row + 1;
  document.getElementById(randomRow).setAttribute("class", "space live");
  document.getElementById(right).setAttribute("class", "space live");
  document.getElementById(bottom).setAttribute("class", "space live");
  document.getElementById(bottomRight).setAttribute("class", "space live");
}
   
function blinker(){
  //left to right
  let randomCol = Math.floor(Math.random() * (col - 2));
  //up and down
  let randomRow = randomCol + (row * Math.floor(Math.random() * (row  - 2) + 1));
  let middle = randomRow + 1;
  let right = randomRow + 2;
  document.getElementById(randomRow).setAttribute("class", "space live");
  document.getElementById(middle).setAttribute("class", "space live");
  document.getElementById(right).setAttribute("class", "space live");
}
   
function toad(){
  //left to right
  let randomCol = Math.floor(Math.random() * (col - 3) + 1);
  //up and down
  let randomRow = randomCol + (row * Math.floor(Math.random() * (row  - 3) + 1));
  let middle = randomRow + 1;
  let right = randomRow + 2;
  document.getElementById(randomRow).setAttribute("class", "space live");
  document.getElementById(middle).setAttribute("class", "space live");
  document.getElementById(right).setAttribute("class", "space live");
  let lowerLeft = middle + row - 2;
  let lowerMiddle = middle + row - 1;
  let lowerRight = middle + row;
  document.getElementById(lowerLeft).setAttribute("class", "space live");
  document.getElementById(lowerMiddle).setAttribute("class", "space live");
  document.getElementById(lowerRight).setAttribute("class", "space live");
}
   
function glider(){
  //left to right
  let randomCol = Math.floor(Math.random() * (col - 2));
  //up and down
  let randomRow = randomCol + (row * Math.floor(Math.random() * (row) + 2));
  let middle = randomRow + 1;
  let right = randomRow + 2;
  let topRight = right - row;
  let connector = topRight - row - 1;
  document.getElementById(randomRow).setAttribute("class", "space live");
  document.getElementById(middle).setAttribute("class", "space live");
  document.getElementById(right).setAttribute("class", "space live");
  document.getElementById(topRight).setAttribute("class", "space live");
  document.getElementById(connector).setAttribute("class", "space live");
}
   
function start(){
  clearInterval(interval);
  interval = setInterval(function(){
    checkStatus();
    checkNeighbor();
    setNeighbor();
    generation++;
    genID.innerHTML = "Generation: " + generation;
  }, 100);
}
   
function gen(num) {
  clearInterval(interval);
  var count = 0;
  interval = setInterval(function(){
    checkStatus();
    checkNeighbor();
    setNeighbor();
    generation++;
    genID.innerHTML = "Generation: " + generation;
    count++;
    if(count == num) {
      clearInterval(interval);
    }
  }, 100);
}
   
function dimensions(){
  document.querySelectorAll('.space').forEach(e => e.remove());
  gridWidth = prompt("Input a width multiple of 100 (board is min 100x100)");
  const grid = document.querySelector('.grid');
  if(gridWidth < 100) {
    gridWidth = 100;
  }
  grid.style.width = gridWidth + "px";
  grid.style.height = gridWidth + "px";
  height = grid.offsetHeight;
  width = grid.offsetWidth;
  col = Math.floor(width / 10);
  row = Math.floor(height / 10);
  currentArray = [];
  nextArray = [];
  clearInterval(interval);
  generation = 0;
  genID.innerHTML = "Generation: " + generation;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      var cell = document.createElement('div');
      cell.setAttribute("class","space dead")
      //cell.classList.add("space");
      //cell.classList.add("dead");
      cell.setAttribute('id', (i*row) + j);
      cell.innerHTML = "";
      cell.addEventListener('click', change);
      cell.addEventListener('mouseover', function(){
        if(mouse == true){
          this.setAttribute("class","space live")
        }
      });
      grid.appendChild(cell);
      //currentArray.push(cell);
    }
  }
}
   
function stop() {
  clearInterval(interval);
}
   
function reset(){
  for (var i = 0; i < (row*col); i++) {
   document.getElementById(i).setAttribute("class", "space dead"); 
  }
  clearInterval(interval);
  generation = 0;
  genID.innerHTML = "Generation: " + generation;
  
}
   
function change() {
  this.classList.toggle("live");
  this.classList.toggle("dead");
}