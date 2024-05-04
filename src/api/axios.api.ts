import axios from 'axios'
import {getTokenFromLocalStorage} from "../helpers/localstorage.helper.ts";
export const instance = axios.create({
    baseURL: 'http://185.237.207.154:3001/api',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    }
})