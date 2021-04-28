export class PlayerSprite extends Phaser.GameObjects.Sprite {
    lastAnim: any;
    vel: any;
    keys: any;
    scene: any;

    constructor(config) {
        super(config.scene, config.x, config.y, "player");

        this.scene = config.scene;
        this.lastAnim = null;
        this.vel = 200;

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;
        this.keys = this.scene.input.keyboard.addKeys({
        left: LEFT,
        right: RIGHT,
        up: UP,
        down: DOWN,
        });
    }

    preUpdate (time, delta) {
        super.preUpdate(time, delta);
    
        const keys = this.keys;
        let animationName = 'player-idle';
    
        if (keys.left.isDown) {
          this.body.velocity.x = -this.vel;
          this.setFlipX(true);
        } else if (keys.right.isDown) {
          this.body.velocity.x = this.vel;
          this.setFlipX(false);
        } else {
            this.body.velocity.x = 0;
        }
    
        if (keys.up.isDown) {
          this.body.velocity.y = -this.vel;
        } else if (keys.down.isDown) {
          this.body.velocity.y = this.vel;
        } else {
            this.body.velocity.y = 0;
        }
    
        // TODO: Clean this up
        // if (keys.up.isDown || keys.down.isDown || keys.left.isDown || keys.right.isDown) {
        //   animationName = "player-walk";
        // } else {
        animationName = 'player-idle';
    
        if(this.lastAnim !== animationName) {
          this.lastAnim = animationName;
          this.anims.play(animationName, true);
        }
      }
}
