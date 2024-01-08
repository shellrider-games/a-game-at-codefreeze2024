const obstacle_generator = {
    timeTillNextSpawn : 0.5
}

obstacle_generator.update = (delta) => {
    console.log("obstacle_generator update");
    obstacle_generator.timeTillNextSpawn -= delta;
    console.log("time till next spawn " + obstacle_generator.timeTillNextSpawn);
    if(obstacle_generator.timeTillNextSpawn <= 0){
        gameData.actors.push(new Obstacle(160, false));
        gameData.actors.push(new Obstacle(200, true));
        obstacle_generator.timeTillNextSpawn += 1.5;
    }
}