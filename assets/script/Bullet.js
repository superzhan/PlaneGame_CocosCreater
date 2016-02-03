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
        speed :100,
        
         
        enenyLaunch: {
            default: null,
            type: cc.Node
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
      
        if(this.node.y >450 || this.node.y <-450)
        {
            this.node.destroy();
            return;
        }
        
        if(this.isMoving )
        {
            this.node.setPositionY(this.node.y+this.speed*dt);
        }
        
        //check bullet
        this.enenys = [];
        this.enenys = this.enenyLaunch.getChildren();
        for(var i=0;i<this.enenys.length;++i)
        {
           var dollRect = this.node.getBoundingBox(); 
           var enenyRect =this.enenys[i].getBoundingBox(); 
           
           if(cc.rectIntersectsRect(dollRect, enenyRect))
           {
            
              
            //   var particle = cc.instantiate(this.explodeParti);
            //   particle.parent = this.node.parent;
            //   particle.setPosition(this.node.getPosition());
              
              cc.log("collider");   
              this.node.destroy();
              this.enenys[i].destroy();
           }
        }
        
      
    },
});
