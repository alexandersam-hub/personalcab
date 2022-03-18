import React from 'react';
import {observer} from "mobx-react-lite";
import state from "../../../Store/ConstructorGameStore";
import {Checkbox} from "react-materialize";

const GameRedact =(observer( (props) => {
    console.log('gamesRedact', props)
    return (
        <div className="row">
            <div>
                <div className="card">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('gameName',e.target.value)}}  id="textarea1" className="materialize-textarea" value={props.game.gameName}></textarea>
                                <label htmlFor="textarea1">{'Название игры'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('countRound',e.target.value)}} id="textarea2" className="materialize-textarea" value={props.game.countRound}></textarea>
                                <label htmlFor="textarea2">{'Количество раундов'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('resourceNames',e.target.value)}} id="textarea3" className="materialize-textarea" value={props.game.resourceNames}></textarea>
                                <label htmlFor="textarea3">{'Название ресурсов (через пробел)'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('resourceCounts',e.target.value)}} id="textarea4" className="materialize-textarea" value={props.game.resourceCounts}></textarea>
                                <label htmlFor="textarea4">Начальное количество ресурсов (цифры через пробел)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('namesRoundBox',e.target.value)}} id="textarea5" className="materialize-textarea" value={props.game.namesRoundBox}/>
                                <label htmlFor="textarea5">{'Название событий раунда (слова через пробел)'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeGame('timesRoundBox',e.target.value)}} id="textarea6" className="materialize-textarea" value={props.game.timesRoundBox}/>
                                <label htmlFor="textarea6">{'Распределение по времени в раунде (цифры через пробел)'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <Checkbox
                                    onChange={(e)=>{state.changeGame('isActive',e.target.checked)}}
                                    checked={props.game.isActive}
                                    id="Checkbox_2"
                                    label={"Игра доступна к запуску?"}
                                    value="Red"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <Checkbox
                                    onChange={(e)=>{state.changeGame('isTimeUsed',e.target.checked)}}
                                    checked={props.game.isTimeUsed}
                                    id="Checkbox_2"
                                    label={'В игре используется время'}
                                    value="Red"
                                />
                            </div>
                        </div>
                    </div>
                    {/*<div className="card-action">*/}
                    {/*    <a href="#">This is a link</a>*/}
                    {/*    <a href="#">This is a link</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}))


export default GameRedact;