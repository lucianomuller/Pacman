var config = {
    type: Phaser.AUTO,
     scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 608,
        height: 608,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }

    },
    
    //la importante es la primera, que es la que arranca
    scene: [Escena3,Escena2,Escena1]
};

var game = new Phaser.Game(config);
var mapa;
var mapaimagen;
var pacman;
var fantasma;
var cursor_izq
var cursor_der
var cursor_arr
var cursor_aba


