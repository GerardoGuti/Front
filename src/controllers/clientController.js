
import Axios from 'axios';

const url='http://10.40.10.53:3000/api/client';

export function postClient(body,callback){
    Axios.post(url,body)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function getAllClients(callback){
    Axios.get(url)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function getClientbyid(id,callback){
    Axios.get(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function deleteClient(id,callback){
    Axios.delete(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function updateClient(id,body,callback){
    Axios.put(`${url}/${id}`,body)
    .then(res=>{callback(null,res)})
    .catch(err=>{callback(err,null)})
}