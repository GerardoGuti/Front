import Axios from 'axios';

const url='http://10.40.10.53:3000/api/product';

export function postProduct(body,callback){
    Axios.post(url,body)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function getAllProducts(callback){
    Axios.get(url)
        .then(res=>{callback(null,res.data)})
        .catch(err=>{callback(err,null)})
}

export function getProductbyid(id,callback){
    Axios.get(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function deleteProduct(id,callback){
    Axios.delete(`${url}/${id}`)
        .then(res=>{callback(null,res)})
        .catch(err=>{callback(err,null)})
}

export function updateProduct(id,body,callback){
    Axios.put(`${url}/${id}`,body)
    .then(res=>{callback(null,res)})
    .catch(err=>{callback(err,null)})
}
