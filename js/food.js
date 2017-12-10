const createFood = () => {
    food = {
        x: Math.round(Math.random()*(mapWidth - cellWidth)/cellWidth),
        y: Math.round(Math.random()*(mapHeight - cellWidth)/cellWidth),
    };
};
