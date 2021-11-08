class Maze
{
    constructor(x, y, width, height)
    {         
        this.rectX = x;
        this.rectY = y;
        this.rectW = width;
        this.rectH = height;
        this.rect = createSprite(this.rectX, this.rectY, this.rectW, this.rectH);
        this.rect.shapeColor = "black";
    }
};