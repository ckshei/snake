const map = document.getElementById('map');
const ctx = map.getContext('2d');

const mapHeight = map.offsetHeight;
const mapWidth = map.offsetWidth;
const mapColor = 'white';
const mapBorder = 'black';

const paintMap = () => {
    ctx.fillStyle = mapColor;
    ctx.fillRect(0, 0, mapWidth, mapHeight);
    ctx.strokeStyle = mapBorder;
    ctx.strokeRect(0, 0, mapWidth, mapHeight);
};
