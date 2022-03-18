import React from 'react';
import state from "../../../../Store/ConstructorGameStore";
import {Row, Col, Card, Icon, Button, CardTitle} from "react-materialize";
import img from '../../../../img/mount.jpg'
const GameComponent = (props) => {
    // console.log('props.game',props.game)
    return (
        <Row >
            <Col
                m={6}
                s={12}
            >
                <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={img} reveal waves="light"/>}
                    reveal={<div>

                            <h3>Название: {props.game.gameName}</h3>
                            <div>
                                <span>Кол-во раундов </span>
                                <span>{props.game.countRound}</span>
                            </div>
                            <div>
                                <span>Название раундов, входящих в игру: </span>
                                <ol>{props.game.namesRoundBox.slice().map((name)=>{
                                    return(
                                        <li key={'name_round_'+name}>{name}</li>
                                    )
                                })}
                                </ol>
                            </div>
                            <div>
                                <span>Время раундов (в секундах): </span>
                                <ol>{props.game.timesRoundBox.map((time, index)=>{
                                    return(
                                        <li key={'time_round_'+index}>{time}</li>
                                    )
                                })}
                                </ol>
                            </div>

                            {/*<div>*/}
                            {/*    <span>Название ресурсов, количество: </span>*/}

                            {/*    <ol>{props.game.resourceNames.map((res, index)=>{*/}
                            {/*        return(*/}
                            {/*            <li key={'time_round_'+index}>{res} :{props.game.resourceCounts[index]} </li>*/}
                            {/*        )*/}
                            {/*    })}*/}
                            {/*    </ol>*/}
                            {/*</div>*/}
                            <div>
                                <span>Время отслеживается: {props.game.isTimeUsed?'да':'нет'}</span>
                            </div>
                        </div>
                    }
                    revealIcon={<Icon>more_vert</Icon>}
                    title={props.game.gameName}
                >
                    <p>
                        <Button className={'red white-text left'}>Удалить</Button>,
                        <a onClick={()=>{state.updateFormGame(props.game.id)}} className={'green white-text btn right modal-trigger'} href="#modal1" >Изменить</a>
                    </p>
                </Card>
            </Col>
        </Row>
        // <Row>
        //     <Col
        //         m={4}
        //         s={8}
        //     >
        //         <Card
        //             actions={[
        //                 <Button className={'red white-text left'}>Удалить</Button>,
        //                 <Button className={'green white-text right'}>Изменить</Button>
        //             ]}
        //             className="blue-grey darken-1"
        //             closeIcon={<Icon>close</Icon>}
        //             revealIcon={<Icon>more_vert</Icon>}
        //             textClassName="white-text"
        //             title={props.game.gameName}
        //         >
        //         </Card>
        //     </Col>
        // </Row>

    );
};

export default GameComponent;