import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';
import testStore from "../../Store/TestStore";

const GamePage =(observer (() => {

    return (
        <div>
            <div>{testStore.count}</div>
            <button onClick={ ()=>{testStore.add()}}>add</button>
        </div>
    );
}));

export default GamePage;