let slider;
let val;
let lines = [];
let circles = [];
let rects = [];
let isDrawing = false;
let isDrawingLines = false;
let isDrawingCircles = false;
let isDrawingRects = false;
let clearClicked = false;
let startX, startY;

let currentShape = null;

function setup() {
  let canvas = createCanvas(windowWidth - 150, windowHeight);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 0);
  slider.position(windowWidth - 140, 80);
  slider.style('width', '130px');
  
  
  //Save Button
  saveButton = createButton('Save!');
  saveButton.position(windowWidth - 110, 10);
  saveButton.size(80, 30);
  saveButton.style("font-family", "Comic Sans MS");
  saveButton.style("font-size", "20px");
  saveButton.mousePressed(saveArt);
  
  //Clear Button
  clearButton = createButton('Clear!');
  clearButton.position(windowWidth - 110, 290);
  clearButton.style("font-family", "Comic Sans MS");
  clearButton.style("font-size", "20px");
  clearButton.mousePressed(clearisPressed);
  
  //Line Button
  lineButton = createButton('Line!');
  lineButton.position(windowWidth - 105, 110);
  lineButton.style("font-family", "Comic Sans MS");
  lineButton.style("font-size", "20px");
  lineButton.mousePressed(lineIsPressed);
  
  //Circle Button
  circleButton = createButton('Circle!');
  circleButton.position(windowWidth - 110, 160)
  circleButton.style("font-family", "Comic Sans MS");
  circleButton.style("font-size", "20px");
  circleButton.mousePressed(circleIsPressed);
  
  //Rectangle Button
  rectButton = createButton('Rectangle!');
  rectButton.position(windowWidth - 120, 210);
  rectButton.style("font-family", "Comic Sans MS");
  rectButton.style("font-size", "20px");
  rectButton.mousePressed(rectIsPressed);
  
}

function draw() {
  clear();
  val = slider.value();
  background(val, 40, 100, 1);
  
  if (currentShape == "line") {
    drawLine();
  } else if (currentShape == "circle") {
    drawCircle();
  } else if (currentShape == "rect") {
    drawRect();
  }
  if (clearClicked == true) {
    clearArt();
  }
  for (const lin of lines) {
    line(lin.startX, lin.startY, lin.endX, lin.endY);
  }
  for (const circ of circles) {
    circle(circ.startX, circ.startY, 40);
  } 
  for (const re of rects) {
    rect(re.startX, re.startY, 40, 70);
  } 
}

function saveArt() {
  saveCanvas(canvas, 'myCanvas', 'jpg');
}

function clearisPressed() {
  clearClicked = true;
  
}

function clearArt() {
  lines = [];
  circles = [];
  rects = [];
  clearClicked = false;
  
}

function lineIsPressed() {
  currentShape = "line"
}

function drawLine() {
    if (mouseIsPressed) {
      if (isDrawing) {
        lines.push({
          startX: mouseX,
          startY: mouseY,
          endX: pmouseX,
          endY: pmouseY,
        });
    }
    isDrawing = true;
  }

  if (isDrawing) {
    stroke(0);
    line(startX, startY, mouseX, mouseY);
  }
  

}

function circleIsPressed() {
  currentShape = "circle"
}

function drawCircle() {
  if (mouseIsPressed) {
    if (isDrawing) {
      circles.push({
        startX: pmouseX,
        startY: pmouseY,
      });
    }
 
    isDrawing = true;
  }
  if (isDrawing) {
    stroke(0);
    circle(startX, startY, 40);
  }
  

}

function rectIsPressed() {
  currentShape = "rect";
}

function drawRect() {
  if (mouseIsPressed) {
    if (isDrawing) {
      rects.push({
        startX: pmouseX,
        startY: pmouseY,
      });
    }
 
    isDrawing = true;
  }
  if (isDrawing) {
    stroke(0);
    rect(startX, startY, 40, 70);
  }
}
