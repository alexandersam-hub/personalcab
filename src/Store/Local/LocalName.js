class LocalName{
    taskRU = new Map()
    constructor() {
        this.taskRU['game']= 'Игра'
        this.taskRU['type'] = 'Тип задания'
        this.taskRU['title'] = 'Название'
        this.taskRU['text'] = 'Текст задания'
        this.taskRU['mark'] = 'Маркеры'
        this.taskRU['location'] = 'Название локации'
        this.taskRU['isActive'] = 'задание активно?'
    }
}

const localName = new LocalName()
export default localName
