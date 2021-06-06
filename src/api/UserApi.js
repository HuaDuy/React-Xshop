import { axiosClient } from './axiosClient';
import { headers } from '../utlis'
const info = JSON.parse(localStorage.getItem('user') || '{}')


const UserApi = {
    getAll() {
        const url = `/users/${info.user._id}`;
        return axiosClient.get(url, headers());
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url, headers());
    },
    add(cate) {
        const url = `/user`;
        return axiosClient.post(url, cate);
    },
    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.delete(url, headers());
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data, headers())
    }
}
export default UserApi;
