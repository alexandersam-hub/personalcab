import React, {useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import adminStore from "../../Store/GameAdminStore";
import config from "../../config"
import 'materialize-css/dist/css/materialize.min.css'
import {Button, Select} from 'react-materialize'
import io from "socket.io-client";
import Loader from "../Loader";
// import store from "../../Store/Store";
import style from './adminGame.module.css'
import TimerCom from "../timer/TimerCom";
import ListGamesComponent from "../Constructor/ListGamesComponent";
import ListGames from "./ListGameComponents/ListGames";
import InfoGame from "./InfoGame/InfoGame";
import ProgressGame from "./ProgressGame/ProgressGame";

const socket = io.connect(config.GAME_URL);

const AdminGame = (observer( () => {



    const [currentGame, setCurrentGame] = useState()
    const [visibleForm, setVisibleFon] = useState(false)
    const [progressGame, setProgressGame] = useState()
    const [isStartGame, setIsStartGame] = useState(false)
    const [isConnect, setIsConnect] = useState(false)
    const [currentTimer, setCurrentTimer] = useState(null)

    useEffect(()=>{
               if(adminStore.isGameBeLoader)
                    getGame(adminStore.currentGameId)

        socket.on('connect', () => {
            console.log(socket.id);
            socket.on('admin_game', (message)=>{
                setIsConnect(true)
                switch (message.type) {
                    case 'report':
                        switch (message.report) {
                            case 'startGame':
                                setIsStartGame(true)
                                break
                            case 'stopGame':
                                setIsStartGame(false)
                                break
                            case 'gameStatistic':
                                setProgressGame(JSON.parse(message.progress))
                                setCurrentTimer({time:message.time, round:message.round, task:message.task})
                                console.log(message)

                        }
                }


            })
            socket.on('disconnect', ()=>{
                setIsConnect(false)
                console.log("disconnect")

            })
            return () => {
                socket.disconnect();
            }
        })








    },[])

    const getGame = (id)=>{
        socket.emit('getDataGameId',{gameId:id})
    }
    const startGame=(id)=>{
        socket.emit('admin_game',
            {
            gameId:id,
            command:'startGame'
            })

        console.log('Запуск игры. Сообщение отправлено')
        console.log('socketIo', socket)
    }

    const observableGame=(id)=>{
         socket.emit('gameId',{gameId:id})

    }
    // socket.on('gameProgress', (game)=>{
    //     setVisibleFon(false)
    //     console.log('io', game)
    //     setCurrentGame(game)
    //     setVisibleFon(true)
    // })
    if(!adminStore.currentGameId){
        const x = setInterval(()=>{
            //console.log('Интервал',adminStore.currentGameId)
            if(adminStore.currentGameId){
                getGame(adminStore.currentGameId)

                //console.log('Интервал')
                clearInterval(x)
            }

        },500)
    }
    console.log('socketIo', socket.id)
    return (

        <div>
            {isConnect?<div className='green'>Connect</div>:<div className='red'>Disconnect</div>}
            {currentTimer?<div><span>Время {currentTimer.time}</span><span>Раунд {currentTimer.round}</span><span>Задание {currentTimer.task}</span></div>:<></>}
            {adminStore.isGameBeLoader?
                <div>
                    <h2>Выбрать игру</h2>
                    {adminStore.isLoad?
                        <div>
                            <ListGames
                                changeGame={getGame}
                                currentGameId={adminStore.currentGameId}
                                games={adminStore.games}/>
                            {visibleForm?
                                <InfoGame observableGame={observableGame} game={currentGame}/>:<></>}
                            <Button className={'green ' + style.btnPaddings} onClick={() => {
                                startGame(adminStore.currentGameId)}}>Старт</Button>
                            <Button className={'red ' + style.btnPaddings} onClick={() => {
                                adminStore.stopGame()}}>Стоп</Button>
                            {isStartGame?<p className="green-text btn"></p>:<></>}
                            {
                                progressGame?
                                        <ProgressGame />:
                                        <></>
                            }
                        </div>

                 :<Loader/>}
                </div>:
                <Loader/>
            }
        </div>
    );
}));

export default AdminGame;