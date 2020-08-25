class Escena2 extends Phaser.Scene {
    constructor() {
      super('Etapa2');
    }

    preload ()
    {
    this.load.image('atlas', 'assets/atlas.png');
    this.load.tilemapTiledJSON('mapa', 'assets/mapapacman.json');
    this.load.atlas('mapa', 'assets/atlas.png', 'assets/atlas_atlas.json');


    };

    create ()
    {
     
    var mapa = this.add.tilemap('mapa');
    mapaimagen = mapa.addTilesetImage('atlas', 'atlas');
    var layer2 = mapa.createStaticLayer('suelo', [mapaimagen], 0, 0);
    var layer = mapa.createStaticLayer('pared', [mapaimagen], 0, 0);
    pacman = this.physics.add.sprite(288, 224, 'mapa').setOrigin(0, 0).setSize(31, 31);

   



    //colisiones
   
    this.physics.add.collider(pacman, layer); 
     
    
    layer.setCollision([56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 0, 56, 56, 0, 56, 0, 56, 56, 56, 0, 56, 0, 56, 56, 0, 56, 56, 56, 56, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 56, 56, 56, 0, 0, 56, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 56, 0, 0, 56, 56, 56, 0, 0, 0, 56, 0, 56, 56, 56, 56, 56, 0, 56, 0, 0, 0, 56, 56, 56, 0, 0, 56, 0, 56, 0, 0, 0, 56, 0, 0, 0, 56, 0, 56, 0, 0, 56, 56, 56, 0, 56, 0, 56, 56, 56, 0, 56, 0, 56, 56, 56, 0, 56, 0, 56, 56, 56, 56, 0, 56, 0, 56, 0, 0, 0, 0, 0, 0, 0, 56, 0, 56, 0, 56, 56, 56, 56, 0, 56, 0, 0, 0, 56, 56, 0, 56, 56, 0, 0, 0, 56, 0, 56, 56, 56, 56, 0, 56, 0, 56, 0, 56, 0, 0, 0, 56, 0, 56, 0, 56, 0, 56, 56, 56, 56, 0, 56, 0, 56, 0, 56, 56, 56, 56, 56, 0, 56, 0, 56, 0, 56, 56, 56, 56, 0, 56, 0, 56, 0, 0, 0, 0, 0, 0, 0, 56, 0, 56, 0, 56, 56, 56, 56, 0, 0, 0, 56, 0, 56, 56, 56, 56, 56, 0, 56, 0, 0, 0, 56, 56, 56, 0, 0, 56, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 56, 0, 0, 56, 56, 56, 0, 56, 0, 56, 0, 56, 56, 56, 56, 56, 0, 56, 0, 56, 0, 56, 56, 56, 0, 0, 56, 0, 56, 0, 0, 0, 56, 0, 0, 0, 56, 0, 56, 0, 0, 56, 56, 56, 0, 56, 0, 56, 0, 56, 0, 56, 0, 56, 0, 56, 0, 56, 0, 56, 56, 56, 56, 0, 0, 0, 0, 0, 56, 0, 0, 0, 56, 0, 0, 0, 0, 0, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56]);
   

  //Teclas de movimiento
  cursor_izq = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  cursor_der = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  cursor_arr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  cursor_aba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  pacman.setVelocityX(150);
  pacman.setVelocityY(150);
    

  }
update (){
  if(cursor_izq.isDown){
    pacman.setVelocityX(-150);
    }else if(cursor_der.isDown){
        pacman.setVelocityX(150);
    }else if(cursor_arr.isDown){
           pacman.setVelocityY(-150); 
        }
        else if(cursor_aba.isDown){
            pacman.setVelocityY(150);
        
}
}
};