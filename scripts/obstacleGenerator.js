const obstacle_generator = {
    timeTillNextSpawn : 0.5
}

obstacle_generator.update = (delta) => {
    obstacle_generator.timeTillNextSpawn -= delta;
    if(obstacle_generator.timeTillNextSpawn <= 0){
        const obstacle1 = new Obstacle(160, false)
        const obstacle2 = new Obstacle(200, true)
        gameData.actors.push(obstacle1);
        gameData.actors.push(obstacle2);
        obstacle_generator.timeTillNextSpawn += 1.5;
    }
}