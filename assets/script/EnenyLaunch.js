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
          
        eneny:{
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
                     this.launchEney();
                 }, 0.5);
    },
    
    launchEney :function()
    {
        var enenyObj =  cc.instantiate(this.eneny);   
        enenyObj.parent = this.node;
        
        var enemySp = enenyObj.getComponent("Eneny");
        enemySp.player = this.player;
        
        enenyObj.setPosition(-200+cc.random0To1()*400,450);
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
