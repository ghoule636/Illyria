import { PlayerSprite } from '../Sprites/player'

export class testScene extends Phaser.Scene {

    constructor() {
        super('SceneTest');
    }
    preload() {
        this.load.spritesheet("player", "assets/player_idle.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_walking_forward", "assets/player_walking_forward.png", { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        this.anims.create({
            key: 'player-idle',
            frames: this.anims.generateFrameNumbers('player', {frames: [0, 1, 2, 3, 4]}),
            frameRate: 4,
            repeat:-1
        })

        this.anims.create({
            key: 'player-walking-forward',
            frames: this.anims.generateFrameNumbers('player_walking_forward', {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
            frameRate: 8,
            repeat:-1
        })

        let player = new PlayerSprite({scene: this, x: 100, y: 100});
        
    }
}