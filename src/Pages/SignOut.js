import { useHistory } from 'react-router-dom'
import AuthApi from '../api/AuthApi';

const SignOut = () => {
    const history = useHistory();
    AuthApi.signOut();
    localStorage.removeItem("user");
    history.push('/signin');
    return null;
}

export default SignOut
