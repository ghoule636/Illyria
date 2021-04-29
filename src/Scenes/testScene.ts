import { PlayerSprite } from '../Sprites/player'

export class testScene extends Phaser.Scene {

    constructor() {
        super('SceneTest');
    }
    preload() {
        this.load.spritesheet("player", "assets/player_idle.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_walking_forward", "assets/player_walking_forward.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_idle_side", "assets/player_idle_right.png", { frameWidth: 64, frameHeight: 64 });
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
    
    create() {
        this.createAnimations();

        let player = new PlayerSprite({scene: this, x: 100, y: 100});
    }


}