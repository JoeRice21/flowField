function createParticles(){
  for(let i = 0; i < noParticles; i++){
    particles[i] = new Particle(mass)
  }
}

function mainLoop(){
  //drawVectors(vectors)
  for(let i = 0; i < noParticles; i++){
    particles[i].update()
  }
  context.globalAlpha = opacityDecay
  context.fillRect(0,0,canvas.width, canvas.height)
}

let context = canvas.getContext("2d")

// noise variables
let noOfTiles = 4;
let tileWidth = canvas.width / noOfTiles
let tileHeight = canvas.height / noOfTiles
let gradientArray = createGradientGrid(2 * noOfTiles, 2 * noOfTiles)

// vector field variables
let noVectors = 1000
let dx = canvas.width / noVectors
let dy = canvas.height / noVectors
let vectors = calcVectors(noVectors)

// particle
let noParticles = 5000
let opacity = 0.2
let mass = 3
let maxSpeed = 4
let particles = new Array(noParticles)

// visual stuff
let opacityDecay = 0.04
let fps = 30

createParticles()
setInterval(mainLoop, 1000 / fps)
