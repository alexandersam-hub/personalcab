import React from 'react';
// import { Socket } from 'react-socket-io';
import io from "socket.io-client";
// const uri = 'http://localhost/test';
// const options = { transports: ['websocket'] };

export default function AppContainer() {
    const socket = io.connect('/');
    socket.on('game', (mess)=>{
        console.log(mess)
    })
    return (
        <div>Render</div>
        // <Socket uri={uri} options={options}>
        //     { this.props.children }
        // </Socket>
    );
}