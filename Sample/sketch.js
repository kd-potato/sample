let shapes = [];
let shapeType = 'square';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  for (let shape of shapes) {
    shape.update();
    shape.draw();
  }
}

function mousePressed() {
  addAShape()
}

function keyPressed() {
  console.info('key pressed')
  shapetype = random(['square', 'circle'])
}

function addAShape() {
  let shape;
  switch (random('square', 'circle')) {
    case 'square':
      shape = new Square(mouseX - 50, mouseY - 50);
      break;
    case 'circle':
      shape = new Circle(mouseX - 50, mouseY - 50);
      break;
  }
  shapes.push(shape);
}

class Shape {
  update() {
    this.dy += 1;
    this.x += this.dx;
    this.y += this.dy;
  }
}

class Square extends Shape {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.color = random('red', 'blue', 'green');
    this.dx = 0;
    this.dy = 0;
  }
  draw() {
    rect(this.x, this.y, 100, 100)
  }
}

class Circle extends Shape {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.color = random('red', 'blue', 'green');
    this.dx = 0;
    this.dy = 0;
  }
  draw() {
    ellpise(this.x, this.y, 100, 100)
  }
}
