/**
 * 启动文件
 */
import Game from './Game'

let game = new Game();

let startBtn = document.getElementById("start")!;
let stopBtn = document.getElementById("stop")!;

startBtn.onclick = ()=>{
    game.start();
}
stopBtn.onclick = ()=>{
    game.stop();
}

