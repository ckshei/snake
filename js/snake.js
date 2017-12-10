const createSnake = () => {
    const startingPosition = {x: startingX, y: startingY};
    snakeArray = [];
    snakeArray.push(startingPosition);
};

const snakeLogic = () => {
    let headX = snakeArray[0].x;
    let headY = snakeArray[0].y;

    // headX and headY will now be the 'new positions'
    switch (direction) {
        case LEFTCODE:
            headX--;
            break;
        case UPCODE:
            headY--;
            break;
        case RIGHTCODE:
            headX++;
            break;
        case DOWNCODE:
            headY++;
    }

    // if snake collides with it's own body or with the wall - restart game
    if (handleBodyCollision(headX, headY, snakeArray) || handleWallCollision(headX, headY)) {
        restartGame();
        return;
    } 

    if (headX === food.x && headY === food.y ) {
        // logic of eating food
        snakeArray.unshift(food);
        createFood();
    } else {
        // moving the tail cell to the head of the snake/array
        let tail = snakeArray.pop();
        tail.x = headX;
        tail.y = headY;
        snakeArray.unshift(tail);
    }
};

const handleWallCollision = (xPosition, yPosition) => {
    let collision = false;
    // check if snake has collided with a wall
    if (xPosition === -1 || xPosition === mapWidth / cellWidth || yPosition === -1 || yPosition === mapHeight / cellWidth) {
        collision = true;
    }
    return collision;
};

const handleBodyCollision = (xPosition, yPosition, array) => {
        let collision = false;
        array.slice(1).map(({x, y}) => {
            if (x === xPosition && y === yPosition) {
                collision = true;
                return;
            }
        });
        return collision;
};
