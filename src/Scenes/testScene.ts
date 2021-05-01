import { PlayerSprite } from '../Sprites/player'

export class testScene extends Phaser.Scene {

    constructor() {
        super('SceneTest');
    }
    preload() {
        //sprites
        this.load.spritesheet("player", "assets/player/player_idle.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_walking_forward", "assets/player/player_walking_forward.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_idle_side", "assets/player/player_idle_right.png", { frameWidth: 64, frameHeight: 64 });

        //world map
        this.load.image("tiles", "assets/tilesets/grass_dirt_tilesheet_extruded.png");
        this.load.image("objectTiles", "assets/tilesets/Objects_tilesheet.png");
        this.load.image("treeTile", "assets/tilesets/Tree_1.png");
        this.load.tilemapTiledJSON("map", "assets/maps/testMap.json");
    }

    createAnimations() {
        this.anims.create({
            key: 'player-idle',
            frames: this.anims.generateFrameNumbers('player', {frames: [0, 1, 2, 3, 4]}),
            frameRate: 4,
            repeat:-1
        })

        this.anims.create({
            key: 'player-idle-side',
            frames: this.anims.generateFrameNumbers('player_idle_side', {frames: [0, 1, 2, 3, 4, 5, 6]}),
            frameRate: 4,
            repeat:-1
        })

        this.anims.create({
            key: 'player-walking-forward',
            frames: this.anims.generateFrameNumbers('player_walking_forward', {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
            frameRate: 8,
            repeat:-1
        })
    }

    createMap() {
        const map = this.make.tilemap({key: "map"});
        const tileset = map.addTilesetImage("grass_dirt", "tiles", 16, 16, 1, 2);
        const objectTileSet = map.addTilesetImage("tree_rocks", "objectTiles")
        const treeTileSet = map.addTilesetImage("Tree_1", "treeTile")
        const allLayers = [tileset, objectTileSet];

        const worldLayer = map.createLayer("below_player", tileset, 0, 0).setScale(2);
        const objectLayer = map.createLayer("Tile Layer 2", treeTileSet, 0, 0).setScale(2);
    }

    create() {
        this.createAnimations();
        this.createMap();
        this.cameras.main.setBounds(0, 0, 1600 * 2, 1600 * 2);
        this.physics.world.setBounds(0, 0, 1600 * 2, 1600 * 2);
        let player = new PlayerSprite({scene: this, x: 1350, y: 100});
        this.cameras.main.startFollow(player);
    }


}