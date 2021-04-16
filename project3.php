<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="project3.css">
    <title>Conway's Game of Life</title>
  </head>
  <body>
    <div>
      <h1 id="title">Conway's Game of Life</h1>
      <h2>Rules</h2>
      <ol>
        <li>Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overcrowding.</li>
        <li>Any live cell with two or three live neighbors’ lives on to the next generation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell. </li>
      </ol>
    </div>
    <div> 
      <div class="startButton">
        <button class="inline" onclick="start()">Start <div class="arrow-down"></div></button>
        <div class="startDropdown">
          <button class="inline" onclick="gen(1)">1 Generation</button>
          <button class="inline" onclick="gen(23)">23 Generations</button>
        </div>
      </div>
      <button class="inline" onclick="stop()">Stop</button>
      <button class="inline" onclick="reset()">Reset</button>
      <div class="buttons">
        <button>Pattern <div class="arrow-down"></div></button>
        <div class="dropdown">
          <button onclick="block()">Still Life (Block)</button>
          <button onclick="blinker()">Oscillator (Blinker)</button>
          <button onclick="toad()">Oscillator (Toad)</button>
          <button onclick="glider()">Glider</button>
        </div>
      </div>
      <button class="inline" onclick="dimensions()">Change Size</button>
    </div>
    <br>
    <div class="grid"></div>
     <script src="project3.js"></script>

     <a href="logout.php"><button class="logout">Logout</button></a>
  </body>
</html>
</html>