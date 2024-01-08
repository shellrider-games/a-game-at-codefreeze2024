const globals = {}
const gameData = {
    actors : []
}

window.onload = () => {
    globals.canvas = document.getElementById('canvas');
    globals.ctx = canvas.getContext('2d');
    drawBackground()
    startGame()
}

function msToSeconds(ms) {
    return ms * 0.0001;
}

function drawBackground() {
    globals.ctx.fillStyle = '#FFFFFF';
    globals.ctx.fillRect(0,0,globals.canvas.width,globals.canvas.height);
}

function prepareCanvasForFrame() {
    globals.ctx.clearRect(0,0,globals.canvas.width, globals.canvas.height);
    drawBackground();
}

function update(delta){
    for(let i = 0; i < gameData.actors.length; i++){
        if(typeof gameData.actors[i].update == 'function'){
            gameData.actors[i].update(delta);
        }
    }
}

function draw(){
    prepareCanvasForFrame();
    for(let i = 0; i < gameData.actors.length; i++){
        if(typeof gameData.actors[i].draw === 'function') {
            gameData.actors[i].draw()
        }
    }
}

function gameLoop(timestamp){
    const delta = msToSeconds(timestamp - globals.lastTimestamp);
    globals.lastTimestamp = timestamp;
    update(delta)
    draw()
    requestAnimationFrame(gameLoop);
}

function startGame() {
    globals.lastTimestamp = 0;
    requestAnimationFrame(gameLoop);
}