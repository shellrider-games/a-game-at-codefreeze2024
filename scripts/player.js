const GRAVITY = 500;

const player = {
    posX : 64,
    posY: 50,
    width: 50,
    height: 50,
    velocity: 0
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