let knightPosition = [0,0];
let observer = null;

// ナイトの位置の初期化と移動を知らせる
function emitChange(){
    observer(knightPosition);
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}