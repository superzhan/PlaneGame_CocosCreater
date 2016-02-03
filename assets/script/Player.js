cc.Class({
    extends: cc.Component,

    properties: {
        canva: {
            default: null,
            type: cc.Node
        },
        
        enenyLaunch: {
            default: null,
            type: cc.Node
        },
        
        bullet:{
            default:null,
            type: cc.Prefab,
        },
       followSpeed: 0
    },

    // use this for initialization
    onLoad: function () {
        
       
        
        var self = this;
        self.moveToPos = cc.p(0, 0);
        self.isMoving = false;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                var touchLoc = touch.getLocation();
                self.isMoving = true;
                self.moveToPos = self.canva.convertToNodeSpaceAR(touchLoc);
                cc.log(this, "click");
                return true; // don't capture event
            },
            onTouchMoved: function(touch, event) {
                var touchLoc = touch.getLocation();
                self.moveToPos = self.canva.convertToNodeSpaceAR(touchLoc);
            },
            onTouchEnded: function(touch, event) {
                self.isMoving = false; // when touch ended, stop moving
            }
        }, self.node);

        this.schedule(function() {
          // 这里的 this 指向 component
             this.launchBullet();
         }, 0.1);
    },

   launchBullet :function(){
       var bullet = cc.instantiate(this.bullet);
       bullet.parent = this.canva;
       bullet.setPosition(this.node.position);
       
       var bulletScript = bullet.getComponent("Bullet");
       bulletScript.enenyLaunch = this.enenyLaunch;
   },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
     if (!this.isMoving) return;
            var oldPos = this.node.position;
             // get move direction
            var direction = cc.pNormalize(cc.pSub(this.moveToPos, oldPos));
            // multiply direction with distance to get new position
            var newPos = cc.pAdd(oldPos, cc.pMult(direction, this.followSpeed * dt)); 
            
            if(cc.pDistance(oldPos, this.moveToPos) > 5 )
            {
                 // set new position
                this.node.setPosition(newPos);
            }
        },
});
