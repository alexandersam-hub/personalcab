import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import store from '../../../Store/ConstructorGameStore'
import local from '../../../Store/Local/LocalName'
import Loader from "../../Loader";
import Task from "./Task/Task";
import {Button,TextInput,Textarea, Modal} from 'react-materialize'
import ListGamesComponent from "../ListGamesComponent";
import {toJS} from "mobx";

const TasksConstructorComponent = (observer( () => {
    const [visibleModal, setVisibleModal] = useState()

    useEffect(()=>{
        store.getAllTask().then()
        //console.log('store.getAllGame()')
    },[])
    return (
        <div>
            {store.isLoad?
                <div>
                    <h2>Выберите игру</h2>
                    {store.games.length === 0?
                        <h3>Нет игр</h3>:
                       <ListGamesComponent change_value={store.choiceGame} choice_option={store.choiceGame} games={store.games.slice()}/>

                    }

                    {store.tasks.length === 0 ?
                    <h2>Нет доступных заданий</h2>:
                    <div>
                        {store.tasks.forEach(task=><Task  key={'task'+task.id} task={task}/>)}
                    </div>
                    }
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Добавить задание</a>
                </div>
                  :
                <Loader/>
            }

            <Modal id="modal1" actions={[]}>
                <div className="modal-content">
                    <Task task={store.currentTask} local={local.taskRU}/>
                    <Button waves="green" onClick={()=> {
                        store.setTaskNull()
                    }} className={'waves-effect waves-green btn-flat orange white-text left'}>Очистить</Button>
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat green white-text right" onClick={()=>{store.addTask()}}>Сохранить</a>
                    <Button modal="close" node="button" waves="green" className={'modal-close waves-effect waves-green btn-flat red white-text right'}>Отмена</Button>
                </div>
            </Modal>
        </div>
    );
}))

export default TasksConstructorComponent;