cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
       isMoving : true,    
       speed: 100,
       
        
        enenyBullet:{
            default:null,
            type: cc.Prefab,
        },
        
         player:{
            default:null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
          this.schedule(function() {
             this.launchBullet();
         }, 0.8);
    },

    launchBullet :function()
    {
      var bullet = cc.instantiate(this.enenyBullet);
       bullet.parent = this.player.parent;
       bullet.setPosition(this.node.position);
       
       var enenyBulletSp = bullet.getComponent("EnenyBullet");
       enenyBulletSp.player = this.player
       
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        if(this.node.y < -450)
        {
            this.node.destroy()
        }
        
        if(this.isMoving)
        {
            this.node.setPositionY(this.node.y - this.speed*dt);
        }
        
    },
});
