function calcVectors(noVectors){
  let vectorArray = new Array(noVectors)

  for(let y = 0; y < vectorArray.length; y++){
    vectorArray[y] = new Array(noVectors)
    for(let x = 0; x < vectorArray.length; x++){
      let angle = (noise(dx * x, dy * y)) * Math.PI * 4 // map [-1,1] to [-720,720]
      vectorArray[y][x] = {x: Math.cos(angle), y: Math.sin(angle)}
    }
  }
  
  return vectorArray
}

function drawVectors(vectors){
  
  for(let y = 0; y < vectors.length; y++){
    for(let x = 0; x < vectors.length; x++){
      context.beginPath()
      context.moveTo(1.5 * dx * x, 1.5 * dy * y)
      context.lineTo(vectors[y][x].x * 10 + 1.5 * dx * x , vectors[y][x].y * 10 + 1.5 * dy * y)
      context.strokeStyle = "black"
      context.lineWidth = 1
      context.stroke()
      context.fillStyle = "red"
      context.fillRect(1.5 * dx * x, 1.5 * dy * y,1,1)
    }
  }
}

