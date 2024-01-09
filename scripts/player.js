const GRAVITY = 500;

const player = {
    posX : 64,
    posY: 50,
    width: 50,
    height: 50,
    velocity: 0
}

function doesPlayerCollideWith(x, y, w, h) {
    return player.posX < x + w &&
           player.posX + player.width > x &&
           player.posY < y + h &&
           player.posY + player.height > y;
}

function handleKeyDown(event) {
    if (event.code === 'Space') {
        player.velocity = -300;
    }
}

player.update = (delta) => {
    player.velocity += GRAVITY * delta;
    player.posY = Math.max(
        player.height,
        Math.min(player.posY+delta*player.velocity, globals.canvas.height)
    );
    for(let i = 0; i < gameData.obstacles.length; i++){
        const box = {}
        obstacle = gameData.obstacles[i];
        box.x = obstacle.posX - obstacle.width/2;
        if(!obstacle.at_top){
            box.y = globals.canvas.height-obstacle.height;
        } else {
            box.y = 0;
        }
        box.w = obstacle.width;
        box.h = obstacle.height;
        if(doesPlayerCollideWith(box.x,box.y,box.w, box.h)){
            console.log("You dead!")
        }
    }
}

player.draw = () => {
    const ctx = globals.ctx;
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(
        player.posX-player.width/2,
        player.posY-player.height,
        player.width,
        player.height
    );
}


document.addEventListener('keydown', handleKeyDown);