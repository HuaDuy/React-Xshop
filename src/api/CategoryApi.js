import { axiosClient } from './axiosClient';
import { headers } from './config';


const info = JSON.parse(localStorage.getItem('user') || '{}')
const CategoryApi = {

    getAll(){
        const url = `/category`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(cate){
        const url = `/category/${info.user._id}`;
        return axiosClient.post(url, cate, headers());
    },
    remove(id){
        const url = `/category/${id}/${info.user._id}`;
        return axiosClient.delete(url, headers());
    },
    update(id, data){
        const url = `/category/${id}/${info.user._id}`;
        return axiosClient.put(url, data, headers())
    }
}
export default CategoryApi;
