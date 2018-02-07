import Axios from 'axios';

const url='http://10.40.10.53:3000/api/product';

export function getAllProducts(callback){
    Axios.get(url)
        .then(res=>{callback(null,res.data)})
        .catch(err=>{callback(err,[])})
}
