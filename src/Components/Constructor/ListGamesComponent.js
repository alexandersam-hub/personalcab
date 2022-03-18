import React from 'react';
import {observer} from "mobx-react-lite";
import {Select} from "react-materialize";
const ListGamesComponent  = (observer((props) => {

    return (
       <Select
        id="Select-16"
        label="Choose your option"
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
        value={props.choice_options}
        onChange={(e)=>{props.change_value(e.target.value)}}
    >
        {props.games.map(game=>{
            console.log('game', game)
            return(
                <option key={'optiongame'+game.id} value="1">
                    {game.gameName}
                </option>)
        })}
    </Select>
    )
}))

export default ListGamesComponent;