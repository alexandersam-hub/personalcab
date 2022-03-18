import React, {useState} from 'react';
import store from '../../Store/Store'
import { observer } from 'mobx-react-lite';
import Loader from "../Loader";

const LoginPage = (observer (() => {
    const [visiblePassword, setVisiblePassword] = useState(false);
   // console.log('!!!!', store.username)
    // const valueUsername = store.username
    // const valuePassword = store.password
    const [valueUsername, setValueUsername] = useState(store.username);
    const [valuePassword, setValuePassword] = useState(store.password);
    //console.log(valueUsername)
    if (store.isReload)
        window.location.reload()
    return (
        store.isLoad?<Loader/>:
            <div className="container">
                <div className="row ">
                    <div className="col s6">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username"
                                       type="text"
                                       value={valueUsername}
                                       onChange={(e)=> {
                                           store.changeUserName(e.target.value)
                                           setValueUsername(e.target.value)
                                       }}
                                />
                                    <label htmlFor="icon_prefix" className={store.username?"active":""}>Логин</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password"
                                       type={visiblePassword ? "text":"password"}
                                       value={valuePassword}
                                       onChange={(e)=> {
                                           store.changePassword(e.target.value)
                                           setValuePassword(e.target.value)
                                       }}
                                       name="password" />
                                    <label htmlFor="password" className={store.username?"active":""}>Пароль</label>

                            </div>
                        </div>
                        <div className="row">
                            <label>
                               <input type="checkbox"
                                               onChange={()=> {
                                                   setVisiblePassword(!visiblePassword)
                                                   console.log(visiblePassword)
                                               }}
                                               checked={visiblePassword?"checked":""} />

                                <span>Показать пароль</span>
                            </label>
                        </div>
                        {store.errorRequest?<label className="red-text">{store.messageError}</label>:<span></span>}

                        <div className="row">
                            <div className="input-field col s6 right-align">
                                <button className="btn waves-effect waves-light"
                                        onClick={
                                            ()=>store.login()
                                        }
                                       >Войти
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    );
}))

export default LoginPage;