import { makeAutoObservable } from "mobx"
import axios from 'axios'
import configApp from '../config'
import Cookies from 'js-cookie';
import config from "../config";


class MenuStore {
    token;
    username;
    role
    password;
    errorRequest = false
    messageError=""
    isLoad= false
    isReload = false
    constructor() {
        makeAutoObservable(this)
    }

    changePassword(password){
        this.password = password
    }
    changeUserName(username){
        this.username = username
        console.log(this.username)
    }

    login(){
        this.isLoad = true
        console.log({
            username:this.username,
            password:this.password
        })
        axios.post(configApp.API_URL+'login', {
            username:this.username,
            password:this.password
        }).then(
            res=>{
                this.token = res.data.token
                this.role = res.data.role
                Cookies.set('token', this.token, { expires: 7 } )
                Cookies.set('role', this.role, { expires: 7 } )
                // console.log('data', res.data)
                this.isLoad = false
                this.isReload = true
                return true
            }
        ) .catch(err => {
            if (err.response) {
                console.log('Ошибка!!!')
                console.log(err.response.data.message)
                this.errorRequest = true
                this.messageError = err.response.data.message
            }
            else {
                this.errorRequest = true
                this.messageError = config.DISPLAY_ERROR_LOGIN
            }
            this.isLoad = false
            return false
        })
    }

}

const menuStore = new MenuStore();

export default menuStore;

