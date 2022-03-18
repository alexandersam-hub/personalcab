import React, {useState, useEffect} from 'react';
import style from './gamepage.module.css'
import io from "socket.io-client";
import config from "../../config";
import SamplePage from "./gamePages/SamplePage";

const GamePage = () => {
    const [currentGame, setGame] = useState(null);
    useEffect(()=>{
        const socket = io(config.GAME_URL);
        socket.connect();
        socket.on('game', (mess) => {
            console.log(mess)
                setGame(mess)
        })
        return () => {
            socket.disconnect();
        }
    },[])

    return (
        <div>
            {
                currentGame?
                    <SamplePage type={'history'} task={{type:"history",title:"История", text:"какой-то текст"}} game={currentGame}/>:
                    <div>Игра не найдена</div>
            }
        </div>
    );
};

export default GamePage;