const rows = 20;
const col = column = 20;

let board = [ ];


function setup() {
    createCanvas(500,550);
    x = width / 2;
    for(let r = 0; r < rows; r++) {
        board[r] = [ ];

        for(let c = 0; c < cols; c++) {
            board[r][c] = VACANT;
        }
    }
}

function draw() {
    background(150);
}
