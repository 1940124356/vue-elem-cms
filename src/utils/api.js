import axios from './fetch'

//用户登录
export function getLogin(data) {
    return axios({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}
//新增品类
export function fetchAddCate(data){
    return axios({
        url:'/cates/add',
        method:'POST',
        data
    })
}

//获取所有品类
export function fetchAllCate(params){
    return axios({
        url:'/cates/all',
        method:'GET',
        params
    })
}

//添加商品
export function fetchCreateGood(data){
    return axios({
        url:'/goods/create',
        method:'POST',
        data
    })
}

//获取所有商品
export function fetchAllGood(params){
    return axios({
        url:'/goods/all',
        method:'GET',
        params
    })
}
export default {
    getLogin,
    fetchAddCate,
    fetchAllCate,
    fetchCreateGood,
    fetchAllGood
}