import { makeAutoObservable, makeObservable  } from "mobx"
import axios from 'axios'
import configApp from '../config'
import Cookies from 'js-cookie';
import config from "../config";


class TestStore {
    count =0

    constructor() {
        makeAutoObservable(this)

    }

    add(){
        console.log('add')
        this.count++
        console.log(this.count)

    }


}

const testStore = new TestStore();

export default testStore;

