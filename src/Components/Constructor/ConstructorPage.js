import React, {useState} from 'react';
import UsersConstructorComponent from "./Users/UsersConstructorComponent";
import GamesConstructorComponent from "./Games/GamesConstructorComponent";
import TasksConstructorComponent from "./Tasks/TasksConstructorComponent";

const ConstructorPage = () => {
    const [type, setType] = useState('users');
    let visibleComponent = null
    switch(type){
        case "users":
            visibleComponent = <UsersConstructorComponent/>
            break
        case 'games':
            visibleComponent = <GamesConstructorComponent/>
            break
        case 'tasks':
            visibleComponent = <TasksConstructorComponent/>
            break
    }
    return (
        <div>
            <button onClick={()=>{setType('users')}}>Пользователи</button>
            <button onClick={()=>{setType('games')}}>Игры</button>
            {/*<button onClick={()=>{setType('update_games')}}>Создание и редактирование игры</button>*/}
            <button onClick={()=>{setType('tasks')}}>Редактор заданий</button>
            { visibleComponent }
        </div>
    );
};

export default ConstructorPage;