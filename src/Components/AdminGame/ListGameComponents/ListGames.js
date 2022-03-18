import React, {useState} from 'react';
import {Select} from "react-materialize";
import {toJS} from "mobx";
import adminStore from '../../../Store/GameAdminStore'

const ListGames = (props) => {
   //console.log('CurrentGame', props.currentGameId)
    return (
        <Select
            id="Select-9"
            label="Выбор игры"
            multiple={false}
            options={{
                classes: '',
                dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                }
            }}
            value={props.currentGameId}
            onChange={(e)=>{
                adminStore.setCurrentGame(e.target.value)
                props.changeGame(e.target.value)
            }}
        >
            {toJS(props.games).map(game=>{
                // console.log('game', game)
                return(
                    <option key={'optiongame'+game.id} value={game.id}>
                        {game.gameName}
                    </option>)
            })}
        </Select>
    );
};

export default ListGames;