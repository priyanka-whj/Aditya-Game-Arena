class Player1
{
    constructor(x, y, width, height)
    {         
        this.rectX = x;
        this.rectY = y;
        this.rectW = width;
        this.rectH = height;
        this.rect = createSprite(this.rectX, this.rectY, this.rectW, this.rectH);
        this.rect.addImage(player1Img);
        this.rect.scale = 0.1;
    }
    moveUp()
    {
        this.rect.y = this.rect.y - 2;
    }
    moveDown()
    {
        this.rect.y = this.rect.y + 2;
    }
    moveLeft()
    {
        this.rect.x = this.rect.x - 2;
    }
    moveRight()
    {
        this.rect.x = this.rect.x + 2;
    }
    releaseBullets()
    {
     this.bullet=createSprite(this.rect.x,this.rect.y,5,5);
     this.bullet.shapeColor = "red";
     this.bullet.velocityX = 4;
     bulletGroup1.add(this.bullet);
    }
};