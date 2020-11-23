
import Draw from './Draw'
import {Point} from './config'
//坐标
interface foodOption{
    size:number,
    color:string
}

class Food extends Draw{

    public option:foodOption
    public point:Point = {x:0,y:0}
    constructor(){
        super();
        this.option = {
            size:10,
            color:'red'
        };
    }
    initFood(option:object){
        this._drawFood(Object.assign(this.option,option));
    }
    removeFood(option:object){
        this._drawFood(Object.assign(this.option,option));
    }
}


export default Food;