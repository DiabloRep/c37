class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }

    getCount(){
        var playerCountRef = db.ref('PlayerCount');
        playerCountRef.on("value",function(data){
            playercount = data.val();
        });
    }

    updateCount(count){
        db.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "playerinfo/player" + this.index;
        db.ref(playerIndex).set({
            name : this.name,
            Distance: this.distance
        });
    }
    // static function those function which are called by class themelve rather than by the object of the class
    static getPlayerInfo(){
        var playerInfoRef = db.ref('playerinfo');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}