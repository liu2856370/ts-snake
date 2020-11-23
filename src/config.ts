
interface Point{
    x:number,
    y:number
}

const canvasOption = {
    width:801,
    height:501
}
const defaultSnakeOption = {
    grid:10,
    color:"blue"
}

//方向
enum moveDire {
    up = 38,
    right = 39,
    down = 40,
    left = 37
}

export {canvasOption ,defaultSnakeOption, Point,moveDire};