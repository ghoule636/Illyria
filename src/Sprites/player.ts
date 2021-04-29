export class PlayerSprite extends Phaser.GameObjects.Sprite {
    lastAnim: any;
    vel: any;
    keys: any;
    scene: any;
    direction: any;

    constructor(config) {
        super(config.scene, config.x, config.y, "player");

        this.scene = config.scene;
        this.lastAnim = null;
        this.vel = 200;
        this.direction = 'front';

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        const { A, D, W, S } = Phaser.Input.Keyboard.KeyCodes;
        this.keys = this.scene.input.keyboard.addKeys({
        left: A,
        right: D,
        up: W,
        down: S,
        });
    }

    preUpdate (time, delta) {
        super.preUpdate(time, delta);
    
        const keys = this.keys;
        let animationName = 'player-idle';
    
        if (keys.left.isDown) {
          this.body.velocity.x = -this.vel;
          this.direction = 'side'
          this.setFlipX(true);
        } else if (keys.right.isDown) {
          this.body.velocity.x = this.vel;
          this.direction = 'side'
          this.setFlipX(false);
        } else {
            this.body.velocity.x = 0;
        }
    
        if (keys.up.isDown) {
            this.body.velocity.y = -this.vel;
            this.direction = 'back';
        } else if (keys.down.isDown) {
            this.direction = 'front';
            this.body.velocity.y = this.vel;
        } else {
            this.body.velocity.y = 0;
        }
    
        // TODO: Clean this up
        if (keys.down.isDown) {
          animationName = "player-walking-forward";
        } else if  (this.direction == 'side') {
            animationName = 'player-idle-side';
        } else {
            animationName = 'player-idle';
        }
    
        if(this.lastAnim !== animationName) {
          this.lastAnim = animationName;
          this.anims.play(animationName, true);
        }
      }
}
