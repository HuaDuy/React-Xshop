import { axiosClient } from './axiosClient';
import { headers } from './config';

const info = JSON.parse(localStorage.getItem('user') || '{}')

const ProductApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/product/${info.user._id}`;
        return axiosClient.post(url, product, headers());
    },
    remove(id){
        const url = `/product/${id}/${info.user._id}`;
        return axiosClient.delete(url , headers());
    },
    update(id, data){
        const url = `/product/${id}/${info.user._id}`;
        return axiosClient.put(url, data, headers())
    }
}
export default ProductApi;   
