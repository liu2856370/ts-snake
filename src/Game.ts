import Draw from './Draw'
import Snake from './Snake'
import Map from './Map'
import Food from './Food'
import {moveDire} from './config'
/**
 * game控制游戏流程
 * draw静态类控制页面渲染
 * Map:为地图类
 * snake:蛇类
 * food:食物类
 */
//定时器
class Game extends Draw{
    public snake: Snake 
    public map: Map 
    public food:Food
    public snakeMoveInterval: NodeJS.Timer | null = null;

    constructor(){
        super();
        this.snake = new Snake();
        this.map = new Map();
        this.food = new Food();
        this.randomInitFood();
        //绑定键盘事件
        this.bindKeyBoard();
    }
    randomInitFood(){
        let x = Math.ceil(Math.random()*79)*10;
        let y = Math.ceil(Math.random()*49)*10;
        console.log(`食物坐标${x},${y}`)
        this.food.point = {x:x,y:y};
        this.food.initFood({
            x:x,
            y:y,
            size:10,
            color:"red"
        });
    }
    //游戏开始
    start(){
        this.snakeMoveInterval = setInterval(()=>{
           this.snake.move();
           let result = this.snake.checkSnakeState(this.food.point);
            switch(result){
                case "eat":
                    this.food.removeFood(this.food.point);
                    this.randomInitFood();
                    break;
                case "die":
                    this.stop();
                    break;
            }
        },100);
    }
    //游戏结束
    stop(){
        clearInterval(Number(this.snakeMoveInterval));
        alert("game over");
    }
    bindKeyBoard(){
        window.onkeydown = (e:any)=>{
            switch(e.keyCode){
                case moveDire.up:
                    this.snake.direction = moveDire.up;
                    break;
                case moveDire.right:
                    this.snake.direction = moveDire.right;
                    break;
                case moveDire.down:
                    this.snake.direction = moveDire.down;
                    break;
                case moveDire.left:
                    this.snake.direction = moveDire.left;
                    break;
            }

        }
    }  

}

export default Game;