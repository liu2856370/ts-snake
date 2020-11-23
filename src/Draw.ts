import {Point,defaultSnakeOption} from './config'

export default class Draw{
    public canvas: HTMLCanvasElement
    public context: CanvasRenderingContext2D
    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d')!;   //加!为啥可以
        
    }
    /**创建食物 */
    _drawFood(food:any){
        //创建食物应该随机,并且不能超过边界范围（1，1，800，500）
        //但是因为食物有大小，所以范围应该为(1+fW/2,1+fh/2,800-fw/2,500-fh/2)
        this.context.fillStyle = food.color;
        this.context.fillRect(food.x,food.y,food.size,food.size);
    }
     /**清除食物 */
    _drawClearFood(food:any){
        this.context.fillStyle = 'white';
        this.context.fillRect(food.x,food.y,food.size,food.size);
    }
    /**创建贪吃蛇 */
    _drawSnake(bodys:Array<Point>){
        bodys.forEach(item => {
            let x = item.x - defaultSnakeOption.grid/2;
            let y = item.y - defaultSnakeOption.grid/2;
            this.context.fillStyle = defaultSnakeOption.color;
            this.context.fillRect(x,y,defaultSnakeOption.grid,defaultSnakeOption.grid);
        });
    }
    /**清除贪吃蛇 */
    _drawClearSnake(bodys:Array<Point>){
        bodys.forEach(item => {
            let x = item.x - defaultSnakeOption.grid/2;
            let y = item.y - defaultSnakeOption.grid/2;
            this.context.fillStyle = 'white';
            this.context.fillRect(x,y,defaultSnakeOption.grid,defaultSnakeOption.grid);
        });
    }
    /**创建边界 */
    _drawWall(width:number,height:number,wallColor:string){
        this.context.fillStyle = wallColor || 'black';
        this.context.lineWidth = 1;
        this.context.strokeRect(1,1,width-2,height-2);
    }

}