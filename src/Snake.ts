
/**
 * 贪吃蛇类
 * 1.具有蛇类属性
 * 2.拥有移动（上下左右）方法，监听方向键，控制方向。
 * 3.吃食物、碰撞死亡等处理
 */

import Draw from "./Draw"
import {canvasOption,defaultSnakeOption,moveDire} from './config'

const grid = defaultSnakeOption.grid;
//坐标
interface Point{
    x:number,
    y:number
}

class Snake extends Draw{
    //初始蛇躯
    public bodys:Array<Point> = new Array()
    //初始方向
    public direction:number = moveDire.up
    //初始颜色
    public color:string = "blue"
    //初始长度
    public length:number = 5
    //速度
    public speed:number = 20

    constructor(){
        super();
        this.bodys = [
            {x:400,y:250},
            {x:400,y:260},
            {x:400,y:270}
        ]
        this._drawSnake(this.bodys);
    }
    move(dire:number=this.direction){  
        //反方向直接return
        if(Math.abs(this.direction-dire) == 2) return;
        //清除之前的小蛇，重新画
        this._drawClearSnake(this.bodys); 
        //设置当前方向
        this.direction = dire;
        //获取头部位置
        let head = this.bodys[0];

        //根据移动方向，填入新的坐标
        switch(dire){
            case moveDire.up:
                this.bodys.unshift({x:head.x,y:head.y-grid});
                break;
            case moveDire.right:
                this.bodys.unshift({x:head.x+grid,y:head.y});
                break;
            case moveDire.down:
                this.bodys.unshift({x:head.x,y:head.y+grid});
                break;
            case moveDire.left:
                this.bodys.unshift({x:head.x-grid,y:head.y});
                break;
        }
        console.log(`头部坐标${this.bodys[0].x},${this.bodys[0].y}`)
    }
    checkSnakeState(foodLoction:Point):string{
        //获取头部位置
        let head = this.bodys[0];
        let result = "";
        //判断是否撞到边界
        if(head.x <= 1 || head.y <= 1 || head.x >= canvasOption.width ||  head.y >= canvasOption.height){
            result = "die";
        }
        //判断是否吃到食物
        else if(head.x == foodLoction.x && head.y == foodLoction.y){
            result = "eat";
        }else{
            //未吃到所以需要，删除一个
            this.bodys.pop();
            result = "noeat";
        }
        this._drawSnake(this.bodys);
        return result;
    }
    
}

export default Snake;