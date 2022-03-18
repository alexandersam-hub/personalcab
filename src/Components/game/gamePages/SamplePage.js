import React from 'react';
import {Navbar,Button, Footer, Icon} from "react-materialize/lib";
import style from './samplePage.module.css'
import StartPages from "./startsPage/startPages";
import HistoryPage from "./history/HistoryPage";
import TimerCom from "../../timer/TimerCom";
import FinishPage from "./finishPage/FinishPage";

const SamplePage = (props) => {

    let Component =  <StartPages name={props.game.gameName} text={'игра скоро начнется'} />
    let Timer = null
    if(props.game.isStart && props.game.currentTime>=0){
        Timer = <TimerCom  currentTime={props.game.currentTime}/>
    }
    if (props.game.isFinish){
        Component = <FinishPage title={props.task.title} text={props.task.text}/>
    }
    else {
        if (props.task) {
            switch (props.task.type) {
                case "history":
                    Component = <HistoryPage title={props.task.title} text={props.task.text}/>
                    break
            }
        }
    }

    return (
        <>
            <Navbar>
                <i className="material-icons">cloud</i>
                <Button>Карта</Button>
            </Navbar>

            <main className={style.main}>
                {Timer}
                {Component}

            </main>




            {/*<Footer>*/}
            {/*    <div className="footer-copyright">*/}
            {/*        <div className="container">*/}
            {/*            © 2021 Copyright Text*/}
            {/*            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Footer>*/}
        </>
    );
};

export default SamplePage;