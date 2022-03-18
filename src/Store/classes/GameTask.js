class GameTask{
    id
    gameName
    countRound
    namesRoundBox
    timesRoundBox
    isActive
    resourceNames
    resourceCounts
    isTimeUsed

    constructor(model) {
        this.id = model.id? model.id: 'new'
        this.countRound = model.countRound
        this.gameName = model.gameName
        this.namesRoundBox = model.namesRoundBox
        this.timesRoundBox = model.timesRoundBox
        this.resourceNames = model.resourceNames
        this.resourceCounts = model.resourceCounts
        this.isActive = model.isActive? model.isActive : true
        this.isTimeUsed = model.isTimeUsed? model.isTimeUsed:true
    }
}

export default GameTask