import { makeAutoObservable, makeObservable, runInAction } from "mobx"
import getResponse from '../Service/ResponceService'
import TaskClass from './classes/TaskClass'
import GameClass from './classes/GameTask'
import configApp from '../config'
import responseToServer from '../Service/ResponceService'
import awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";

class ConstructorGameStore{
    games=[]
    tasks=[]
    currentTask =  new TaskClass({})
    currentGame = new GameClass({})
    isLoad=false
    urlGameAdmin= configApp.GAME_URL+'constructor/'
    typeOperationGame

    constructor(){
        this.isLoad = false
        makeAutoObservable(this)
        this.getAllGame()
    }


    async getAllGame(){
        this.isLoad = false
        const games = await getResponse(this.urlGameAdmin+'get_games')
      //  console.log('games', games)
        runInAction(()=>{
            this.games = games
            if (!this.currentGame &&  this.games.length>0)
                this.currentGame = this.games[0]
            this.isLoad = true

        })
    }

    changeChoiceGame(value){
        this.choiceGame = value
     //   console.log(value)
    }

    async getAllTask(){
        this.isLoad = false
        const tasks = await getResponse(this.urlGameAdmin+'get_tasks')
        runInAction(()=>{
            this.tasks = tasks
            this.isLoad = true
        })
    }
    createFormGame(){
        this.typeOperationGame = 'add'
        this.currentGame = new GameClass({})
    }
    updateFormGame(idGame){

        this.typeOperationGame = 'update'
        const gms = this.games.slice()
        console.log('id', {...gms[0]})
        this.currentGame = gms.find(item=>idGame==={...item}.id)
        console.log('updateFunc', this.games.find(item=>item.id===idGame))
    }

    addNewTaskToClient(){
        this.currentTask = new TaskClass({})
        this.currentTask.id = 'new'
    }

    async changeTask(typeLine, data){
        this.currentTask[typeLine] = data
        this.currentTask = {...this.currentTask}
    }

    async changeGame(typeLine, data){

        this.currentGame[typeLine] = data
        this.currentGame = {...this.currentGame}
    }

    setTaskNull(){
        this.addNewTaskToClient()
    }
    async addTask(){
        const data = await responseToServer(this.urlGameAdmin+'add_task', this.currentTask)
        this.tasks.push(new TaskClass(data))
    }

    async addGame(){
        let data
        if(this.typeOperationGame === 'add')
            data = await responseToServer(this.urlGameAdmin+'add_game', this.currentGame)
        else
            data = await responseToServer(this.urlGameAdmin+'update_game', this.currentGame)

        this.games.push(new GameClass(data))
    }
}

const constructorStore = new ConstructorGameStore();

export default constructorStore;