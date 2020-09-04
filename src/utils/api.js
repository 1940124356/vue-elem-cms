import axios from './fetch'

export function getLogin(data) {
    return axios({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}

export default {
    getLogin
}