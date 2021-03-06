//Storing positions for every White Piece
const piecesWhite= {
    pawnOne: { pieceType: 'pawn', position: 'a2', potentialPositions: [] },
    pawnTwo: { pieceType: 'pawn', position:'b2', potentialPositions: [] },
    pawnThree: { pieceType: 'pawn', position:'c2', potentialPositions: [] },
    pawnFour: { pieceType: 'pawn', position: 'd2', potentialPositions: [] },
    pawnFive: { pieceType: 'pawn', position: 'e2', potentialPositions: [] },
    pawnSix: { pieceType: 'pawn', position: 'f2', potentialPositions: [] },
    pawnSeven: { pieceType: 'pawn', position: 'g2', potentialPositions: [] },
    pawnEight: { pieceType: 'pawn', position: 'h2', potentialPositions: [] },

    knightOne: { pieceType: 'knight', position: 'b1', potentialPositions: [] },
    knightTwo: { pieceType: 'knight', position: 'g1', potentialPositions: [] },

    bishopOne: { pieceType: 'bishop', position: 'c1', potentialPositions: [] },
    bishopTwo: { pieceType: 'bishop', position: 'f1', potentialPositions: [] },

    rookOne: { pieceType: 'rook', position:'a1', potentialPositions: [] },
    rookTwo: { pieceType: 'rook', position: 'h1', potentialPositions: [] },

    kingWhite: { pieceType: 'king', position: 'e1', potentialPositions: [] },
    queenOne: { pieceType: 'queen', position: 'd1', potentialPositions: [] }
};





//Storing positions for every Black Piece
const piecesBlack= {
    pawnOne: { pieceType: 'pawn', position: 'a7', potentialPositions: [] },
    pawnTwo: { pieceType: 'pawn', position:'b7', potentialPositions: [] },
    pawnThree: { pieceType: 'pawn', position:'c7', potentialPositions: [] },
    pawnFour: { pieceType: 'pawn', position: 'd7', potentialPositions: [] },
    pawnFive: { pieceType: 'pawn', position: 'e7', potentialPositions: [] },
    pawnSix: { pieceType: 'pawn', position: 'f7', potentialPositions: [] },
    pawnSeven: { pieceType: 'pawn', position: 'g7', potentialPositions: [] },
    pawnEight: { pieceType: 'pawn', position: 'h7', potentialPositions: [] },

    knightOne: { pieceType: 'knight', position: 'b8', potentialPositions: [] },
    knightTwo: { pieceType: 'knight', position: 'g8', potentialPositions: [] },

    bishopOne: { pieceType: 'bishop', position: 'c8', potentialPositions: [] },
    bishopTwo: { pieceType: 'bishop', position: 'f8', potentialPositions: [] },

    rookOne: { pieceType: 'rook', position:'a8', potentialPositions: [] },
    rookTwo: { pieceType: 'rook', position: 'h8', potentialPositions: [] },

    kingBlack: { pieceType: 'king', position: 'e8', potentialPositions: [] },
    queenOne: { pieceType: 'queen', position: 'd8', potentialPositions: [] }
};





const blockedPositionsForBlackKing= [];
const blockedPositionsForWhiteKing= [];

const overallPotentialPositions = {
    white: [],
    black: []
}





const castle= {
    white: {
        kingNotMoved: true,

        queenSideRook: true,
        kingSideRook: true,
        
        b1: document.getElementById(`b1`).hasChildNodes(),
        c1: document.getElementById(`c1`).hasChildNodes(),
        d1: document.getElementById(`d1`).hasChildNodes(),
        f1: document.getElementById(`f1`).hasChildNodes(),
        g1: document.getElementById(`g1`).hasChildNodes()
    },

    black: {
        kingNotMoved: true,

        queenSideRook: true,
        kingSideRook: true,

        b8: document.getElementById(`b8`).hasChildNodes(),
        c8: document.getElementById(`c8`).hasChildNodes(),
        d8: document.getElementById(`d8`).hasChildNodes(),
        f8: document.getElementById(`f8`).hasChildNodes(),
        g8: document.getElementById(`g8`).hasChildNodes()
    }
};










//initially it's white's move
let whiteMove= true;

//at the start of game, no piece is selected
let selectedPiece= null;

//initially neither White's or Black's King is in check
let whiteChecked= false;
let blackChecked= false;

//pieces checking the king
let blackChecker= [];
let whiteChecker= [];

//pinned pieces
const pinnedPieces = {
    white: {},
    black: {}
}

//initially no extra queen on board from either side
let extraWhiteQueenCount= 0;
let extraBlackQueenCount= 0;

//play game
let play = true;





//light up the square you're hovering on
if(play){
    const sudoku= document.querySelector('#sudoku');

    //indicating which chess square you're currently hovering over
    sudoku.addEventListener('mouseover', highlightSquare);
    //remove the indication, when mouse pointer moved away from the chess square its currently hovering over
    sudoku.addEventListener('mouseout', unhighlightSquare);
}