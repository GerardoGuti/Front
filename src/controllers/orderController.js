import Axios from 'axios';

const url='http://10.40.10.53:3000/api/order';

export function postOrder(body,callback){
    Axios.post(url,body)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function getAllOrders(callback){
    Axios.get(url)
        .then(res=>{callback(null,res.data)})
        .catch(err=>{callback(err,null)})
}

export function getOrderbyid(id,callback){
    Axios.get(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function deleteOrder(id,callback){
    Axios.delete(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function updateOrder(id,body,callback){
    Axios.put(`${url}/${id}`,body)
    .then(res=>{callback(null,res)})
    .catch(err=>{callback(err,null)})
}
