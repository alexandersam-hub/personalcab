import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import LoginPage from "./Components/login/LoginPage";
import GamePage from "./Components/game/GamePage";
import TestComponent from "./Components/test/TestPage";
import Cookies from 'js-cookie';
import AppContainer from './Components/ws/AppWs'
import AdminGame from "./Components/AdminGame/AdminGame";
import ConstructorPage from "./Components/Constructor/ConstructorPage";

function App() {
   const token = Cookies.get('token')
    const role = Cookies.get('role')
   //console.log("!!!!", token)
    let app
    // console.log('App start')
    if (token && role){
       if(role === 'admin') {
           app = (<Router>
               <Routes>
                   <Route path="/login" element={<LoginPage/>}/>
                   {/*<Route path="/" element={<GamePage/>}/>*/}
                   <Route path='/test' element={<TestComponent/>}/>
                   <Route path='/ws' element={<AppContainer/>}/>
                   <Route path='/' element={<AdminGame/>}/>
                   <Route path='/constructor' element={<ConstructorPage/>}/>
               </Routes>
           </Router>)
       }
        else if(role === 'user') {
            app = <GamePage/>
        }
        else{
           app = <LoginPage/>
       }
    }else{
         app = <LoginPage/>
    }
  return (
// <div>
//   <LoginPage></LoginPage>
// </div>
      <div>{app}</div>
  );
}

export default App;
