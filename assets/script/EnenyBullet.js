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
        isMoving :true,
        speed: 200,
        
        player:{
            default:null,
            type: cc.Node,
        },
        
        explodeParti:{
          default:null,
          type:cc.Prefab,
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
       if(this.node.y < -450)
       {
           this.node.destroy();
           return ;
       }
       
       if(this.isMoving)
       {
           this.node.setPositionY(this.node.y - this.speed*dt);
       }
       
       var dollRect = this.node.getBoundingBox(); 
       var playerRect =this.player.getBoundingBox(); 
       
       if(cc.rectIntersectsRect(dollRect, playerRect))
       {
        //   var particle = cc.instantiate(this.explodeParti);
        //   particle.parent = this.node.parent;
        //   particle.setPosition(this.node.getPosition());
              
          cc.log("collider");   
          this.node.destroy();
       }
       
        cc.log("check");   
    },
});
