import { axiosClient } from './axiosClient';

const OrderAPI = {
    getAll(){
        const url = `/orders`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/orders/${id}`;
        return axiosClient.get(url);
    },
    add(order){
        const url = `/orders`;
        return axiosClient.post(url, order);
    },
    remove(id){
        const url = `/orders/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data){
        const url = `/orders/${id}`;
        return axiosClient.put(url, data)
    }
}
export default OrderAPI;
