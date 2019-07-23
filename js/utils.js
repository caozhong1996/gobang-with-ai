
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#5e5d5d'
ctx.lineWidth = 0.5

// 初始化棋盘样式
function initBoard () {
    for (var i = 0; i < 15; i++) {
        ctx.moveTo(15 + i * 30, 15);
        ctx.lineTo(15 + i * 30, 435);
        ctx.stroke();
        ctx.moveTo(15, 15 + i * 30);
        ctx.lineTo(435, 15 + i * 30);
        ctx.stroke();
    }
}

// 初始化棋盘上每一个可以下子的点，0没有棋子，1有棋子
function initPiceList (pieceList) {
    for (let i = 0; i < 15; i++) {
        pieceList[i] = []
        for (let j = 0; j < 15; j ++) {
            pieceList[i][j] = 0
        }
    }
}

function initWins (wins) {
    let count = 0
    // 全部横着的情况
    for (let i = 0; i < 12; i++) {
        wins[i] = []
        for (let j = 0; j < 15; j++) {
            wins[i][j] = []
            wins[i][j][count] = 1
            count++
        }
    }
    // 全部竖着的情况
    for (let i = 0; i < 15; i++) {
        wins[i] = []
        for (let j = 0; j < 12; j++) {
            wins[i][j] = []
            wins[i][j][count] = 1
            count++
        }
    }
    // 全部左斜的情况
    // for (let ) {

    // }
    console.log(count)
}

function drawPiece (x, y) {
    ctx.fillStyle = hand ? "#000" : '#fff'
    ctx.strokeStyle = hand ? "#0000ff" : '#000'
    ctx.beginPath()
    ctx.arc(x * 30 + 15, y * 30 + 15, 12, 0, 2*Math.PI, true)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
}