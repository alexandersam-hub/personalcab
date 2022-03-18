class TaskClass{
    game
    type
    title
    text
    mark
    location
    isActive

    constructor(model) {
        this.game = model.game? model.game: ''
        this.type= model.type? model.type: ''
        this.title= model.title? model.title: ''
        this.text= model.text? model.text: ''
        this.mark= model.mark? model.mark: ''
        this.location= model.location? model.location: ''
        this.isActive= model.isActive? model.isActive: true
    }
}
export default TaskClass

