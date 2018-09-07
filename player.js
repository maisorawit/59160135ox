class Player {
    //              defult parameter
    //                     V 
    constructor(name = "unknown"){
        this.name = name
    }

    getName(){
        return this.name
    }
}

module.exports = Player