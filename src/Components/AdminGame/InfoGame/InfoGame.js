import React from 'react';
import adminGame from '../../../Store/GameAdminStore'
import {toJS} from 'mobx'
import style from "../adminGame.module.css";
import adminStore from "../../../Store/GameAdminStore";
import {Button} from "react-materialize";
const InfoGame = (props) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{toJS(adminGame.currentGame).gameName}</span>
                        <p>Количество раундов: {props.game.countRound}</p>
                        <p>{props.game.isStart?<span className="green-text">Игра запущена</span>:<span className="red-text">Игра не запущена</span>}</p>
                        <p>Время, на которое разбиты раунды: {props.game.timesRoundBox.toString()}</p>
                        <p>Количество заданий в раунде: {props.game.timesRoundBox.length}</p>
                        {props.game.isStart?
                            <Button className={'orange ' + style.btnPaddings} onClick={() => {
                                props.observableGame(adminStore.currentGameId)}}>Следить за игрой</Button>:<></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoGame;