class Particle {
  constructor(mass){
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.prevX = this.x
    this.prevY = this.y
    this.velocity = {x: 0, y: 0}
    this.acceleration = {x: 0, y: 0}
    this.mass = mass
  }

  getTile(){
    let tileX = Math.floor(this.x / dx )
    let tileY = Math.floor(this.y / dy )
    return {x: tileX, y: tileY}
  }

  updateAcc(){
    let tile = this.getTile()
    let force = vectors[tile.y][tile.x]
    this.acceleration.x = force.x / this.mass
    this.acceleration.y = force.y / this.mass
  }

  updateVelocity(){
    this.velocity.x += this.acceleration.x
    this.velocity.y += this.acceleration.y
    let magnitude = Math.sqrt(Math.pow(this.velocity.x,2) + Math.pow(this.velocity.y,2))
    if(magnitude > maxSpeed){
      let scale = magnitude / maxSpeed
      this.velocity.x = this.velocity.x / scale
      this.velocity.y = this.velocity.y / scale
    }
    return 
  }

  updatePos(){
    this.prevX = this.x
    this.prevY = this.y

    this.x += this.velocity.x
    this.y += this.velocity.y
    if(this.x <= 0){
      this.x = canvas.width - 10
      this.prevX = canvas.width - 10
    }
    if(this.x >= canvas.width){
      this.x = 10
      this.prevX = 10
    }
    if(this.y <= 0){
      this.y = canvas.height - 10
      this.prevY = canvas.height - 10

    }
    if(this.y >= canvas.height){
      this.y = 10
      this.prevY = 10
    }
    return
    
  }

  draw(){
    context.save()
    context.globalAlpha = opacity
    context.beginPath()
    context.moveTo(this.prevX, this.prevY)
    context.lineTo(this.x, this.y)
    context.strokeStyle = "red"
    context.lineWidth = 2
    context.stroke()
    context.closePath()
    context.restore()
  }
  
  update(){
    this.updateAcc()
    this.updateVelocity()
    this.updatePos()
    this.draw()
  }
}