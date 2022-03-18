import React from 'react';
import {Button,Checkbox,Textarea} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import state from '../../../../Store/ConstructorGameStore'
import {observer} from "mobx-react-lite";

const Task = (observer( (props) => {
    return (
        <div className="row">
            <div>
                <div className="card">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeTask('title',e.target.value)}}  id="textarea1" className="materialize-textarea" value={props.task.title}></textarea>
                                <label htmlFor="textarea1">{props.local['title']}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeTask('type',e.target.value)}} id="textarea2" className="materialize-textarea" value={props.task.type}></textarea>
                                <label htmlFor="textarea2">{props.local['type']}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeTask('text',e.target.value)}} id="textarea3" className="materialize-textarea" value={props.task.text}></textarea>
                                <label htmlFor="textarea3">{props.local['text']}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeTask('mark',e.target.value)}} id="textarea4" className="materialize-textarea" value={props.task.mark}></textarea>
                                <label htmlFor="textarea4">{props.local['mark']}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <textarea onChange={(e)=>{state.changeTask('location',e.target.value)}} id="textarea5" className="materialize-textarea" value={props.task.location}/>
                                <label htmlFor="textarea5">{props.local['location']}</label>

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field ">
                                <Checkbox
                                    onChange={(e)=>{state.changeTask('isActive',e.target.checked)}}
                                    checked={props.task.isActive}
                                    id="Checkbox_2"
                                    label={props.local['isActive']}
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

export default Task;