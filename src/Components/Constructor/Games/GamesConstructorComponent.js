import React, {useEffect} from 'react';
import store from '../../../Store/ConstructorGameStore'
import Loader from "../../Loader";
import {observer} from "mobx-react-lite";
import GameComponent from "./gameComponent/GameComponent";
import {Button, Modal} from "react-materialize";
import GameRedact from "./GameRedact";
import {toJS} from "mobx";

const GamesConstructorComponent = (observer( () => {
    useEffect(()=>{
        store.getAllGame().then()
    },[])

    return (
        <div>
            <h2>Доступные игры</h2>
            {store.isLoad?
                <div>{ store.games.slice().map(game=>{
                    const currentGame = {...game}

                    return(
                        <div key={'game'+currentGame.id}>
                            <GameComponent game ={currentGame} />
                        </div>
                    )
                })}
                    <a onClick={()=> {
                        store.createFormGame()
                    }} className="waves-effect waves-light btn modal-trigger" href="#modal1">Создать игру</a>
                </div>
                :<Loader/>}

            <Modal id="modal1" actions={[]}>
                <div className="modal-content">
                    <GameRedact game={{...store.currentGame}}/>
                    <Button waves="green" onClick={()=> {
                        store.setTaskNull()
                    }} className={'waves-effect waves-green btn-flat orange white-text left'}>Очистить</Button>
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat green white-text right" onClick={()=>{store.addGame()}}>Сохранить</a>
                    <Button modal="close" node="button" waves="green" className={'modal-close waves-effect waves-green btn-flat red white-text right'}>Отмена</Button>
                </div>
            </Modal>
        </div>
    );
}))
export default GamesConstructorComponent;