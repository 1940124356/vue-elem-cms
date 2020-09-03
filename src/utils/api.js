import axios from './fetch'

export function getLogin(params) {
    return axios({
        url:'',
        method:'GET',
        params
    })
}

export default {
    getLogin
}