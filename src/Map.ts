import Draw from "./Draw";
import {canvasOption} from './config'

class Map extends Draw{
    public width:number = canvasOption.width
    public height:number = canvasOption.height
    public wallColor:string = 'black'
    constructor(){
        super();
        this._drawWall(this.width,this.height,this.wallColor);
    }
}


export default Map;