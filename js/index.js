var hand = true // 本轮下黑棋还是下白旗的标志
var wins = [] // 记录所有可能赢的情况
var pieceList = []

initPiceList(pieceList)
initWins(wins)
initBoard()

function downPiece (e) {
    let x = Math.round((e.offsetX - 15) / 30)
    let y = Math.round((e.offsetY - 15) / 30)
    if (pieceList[x][y]) {
        return
    } else {
        pieceList[x][y] = 1
        drawPiece(x, y)
    }
    hand = !hand
}