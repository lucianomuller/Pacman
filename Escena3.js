class Escena3 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    preload(){
        this.load.image('titulo', 'assets/titulopacman.jpg');
        this.load.image('nivel1', 'assets/etapa1.png');
        this.load.image('nivel2', 'assets/etapa2.png');
    };

    create(){
        
        this.add.image(300, 200, 'titulo');
        this.add.image(300, 420, 'nivel1').setInteractive().on('pointerdown', () => this.Etapa1() );
        this.add.image(300,500, 'nivel2').setInteractive().on('pointerdown', () => this.Etapa2() );
    };

    Etapa1(){
       
        this.scene.start('Etapa1');
      }
    

    Etapa2(){
       
          this.scene.start('Etapa2');
        }
      }