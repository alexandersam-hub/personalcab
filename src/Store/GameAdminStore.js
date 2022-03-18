import { makeAutoObservable, makeObservable, runInAction,configure,toJS } from "mobx"
import axios from 'axios'
import configApp from '../config'
import Cookies from 'js-cookie';
import config from "../config";
import getResponse from '../Service/ResponceService'

// configure({
//     useProxies: "never"
// })

class GameAdminStore {
    games=[]
    isGameBeLoader= false
    urlGameAdmin= configApp.GAME_URL+'game/'
    isLoad = false
    currentGameId
    currentGame
    testCount = 0

    constructor() {
       makeAutoObservable(this)
       this.getGame()
    }

    setCurrentGame(gameId){
        //console.log('!!!currentGameId', typeof gameId)

        this.currentGameId = gameId
        this.setGame(gameId)
    }

    setGame(gameId){
        const games = JSON.parse(JSON.stringify(this.games))
        this.currentGame = games.find(item=>item.id === gameId)
        console.log( this.currentGame )
    }

    // testAdd(){
    //
    //     this.testCount++
    //     console.log('add count', this.testCount)
    // }


    async getGame(){
        this.isLoad = false
        this.isGameBeLoader = false
        const game = await getResponse(this.urlGameAdmin+'admingame')
        runInAction(()=>{
            this.games = game
            console.log('game download',this.games)
            this.isGameBeLoader = true
            this.currentGameId = this.games[0].id
            this.setGame(this.games[0].id)

            this.isLoad = true
        })
    }

    async stopGame(){
        this.isLoad = false
        const game = await getResponse(this.urlGameAdmin+'todo/stop',{game:this.currentGameId} )
        runInAction(()=>  this.isLoad = true)
        // console.log('Game ', game)
    }

    async startGame(){
        this.isLoad = false
        const game = await getResponse(this.urlGameAdmin+'todo/start',{game:this.currentGameId})
        runInAction(()=>  this.isLoad = true)
        // console.log('Game ', game)

    }



    // async getResponse(link){
    //     let data = null
    //     const api = axios.create({
    //         withCredentials: true
    //     });
    //
    //       await api.post(this.urlGameAdmin+link).then(
    //             res=>{
    //                 // console.log(res)
    //                 data = res.data
    //             }
    //         ) .catch( err => {
    //             if (err.response) {
    //                 console.log('Ошибка!!!')
    //                 console.log(err.response.data.message)
    //
    //         }
    //        })
    //     return data
    // }

}

const gameAdminStore = new GameAdminStore();

export default gameAdminStore;
