import { axiosClient } from './axiosClient';

const AuthApi = {
    signUp(user){
        const url = `/signup`;
        return axiosClient.post(url, user,{
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
    },
    signIn(user){
        const url = `/signin`;
        return axiosClient.post(url, user,{
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
    },
    signOut(){
        const url = `/signout`;
        return axiosClient.get(url)
    }
}
export default AuthApi;
