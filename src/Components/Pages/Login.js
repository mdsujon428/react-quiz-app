import LoginImage from '../../assets/images/login.svg';
import LoginForm from '../LoginForm';
import Illustration from './Illustration';

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration alt="Login" IllustrationImage={LoginImage}/>
                <LoginForm/>
            </div>
        </>
    );
};

export default Login;