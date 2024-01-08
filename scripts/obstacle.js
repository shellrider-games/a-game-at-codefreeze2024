const speed = 250;

class Obstacle {
    
    constructor(height, at_top) {
        this.height = height;
        this.width = 40;
        this.at_top = at_top;
        this.posX = globals.canvas.width;
    }

    update(delta) {
        this.posX = this.posX - speed * delta;
    }

    draw(){
        const ctx = globals.ctx;
        ctx.fillStyle = '#00FF00';
        
        if(!this.at_top) {
            ctx.fillRect(this.posX - this.width/2,
                globals.canvas.height-this.height,
                this.width,
                this.height
            )
        } else {
            ctx.fillRect(this.posX - this.width/2,
                0,
                this.width,
                this.height
            )
        }
    }

}