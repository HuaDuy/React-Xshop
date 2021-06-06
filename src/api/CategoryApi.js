import { axiosClient } from './axiosClient';
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
        const url = `/category`;
        return axiosClient.post(url, cate);
    },
    remove(id){
        const url = `/category/${id}/`;
        return axiosClient.delete(url);
    },
    update(id, data){
        const url = `/category/${id}/`;
        return axiosClient.put(url, data)
    }
}
export default CategoryApi;
