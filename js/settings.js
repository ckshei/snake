const startingX = 1; // TODO: randomize starting position?
const startingY = 1;
const cellWidth = 10;
const cellColor = '#222222';
const cellSpacingColor = 'white';
const LEFTCODE = 'ArrowLeft';
const UPCODE = 'ArrowUp';
const RIGHTCODE = 'ArrowRight';
const DOWNCODE = 'ArrowDown';
const defaultDirection = RIGHTCODE; // snake will move to the right by default
let snakeArray = []; // holds the position of the snake
let food;
let direction;

const initGame = () => {
    direction = defaultDirection;
    handleChangeDirection();
    createSnake();
    createFood();
    gameLoop = setInterval(runGame, 60);
};

const restartGame = () => {
    clearInterval(gameLoop);
    initGame();
};

const runGame = () => {
    paintMap();
    snakeLogic();
    paintSnake();
    paintFood();
};

const paintCell = (x, y) => {
    ctx.fillStyle = cellColor;
    ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
    ctx.strokeStyle = cellSpacingColor;
    ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
};

const handleChangeDirection = () => {
    document.addEventListener('keydown', ({key}) => {
        switch (key) {
            case LEFTCODE:
                direction = LEFTCODE;
                break;
            case UPCODE:
                direction = UPCODE;
                break;
            case RIGHTCODE:
                direction = RIGHTCODE;
                break;
            case DOWNCODE:
                direction = DOWNCODE;
        }
    });
};

const paintFood = () => {
    paintCell(food.x, food.y);
};

const paintSnake = () => {
    if (snakeArray.length) {
    snakeArray.map(({x, y})=>{
        paintCell(x, y);
    });
}
};
