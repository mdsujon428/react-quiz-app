import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Components/Button';
import FormInfo from '../Components/FormInfo';
import Form from '../Components/Pages/Form';
import TextInput from '../Components/TextInput';
import useFirebase from '../hooks/useFirebase';
import classes from '../styles/LoginForm.module.css';


const LoginForm = () => {

    const [User,setUser] = useState({});
    const [error ,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const {logIn} = useFirebase()

    const history = useHistory();

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries());

        try {
            setError("");
            setLoading(true);
            await logIn(user.email,user.password,);
            history.push('/')
            console.log(user);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to login!")
        }
    }

    const onChange =(e)=>{
        setUser({...User,[e.target.name]:e.target.value})
    }

    return (
        <Form style={{height:"330px"}} onSubmit={handleSubmit}>
                    <TextInput 
                    type="email"
                    name="email"
                    required
                    onChange={onChange}
                    placeholder="Enter email" 
                    icon="alternate_email"
                    />

                    <TextInput 
                    type="password" 
                    name="password"
                    required
                    onChange={onChange}
                    placeholder="Enter your password" 
                    icon="lock"
                    />

                    <Button disabled={loading} type="submit">
                        <span>Submit now</span>
                    </Button>

                   {error && <p className={classes.error}> {error} </p>}

                    <FormInfo> Don't have an account? <Link to="/signup">Signup</Link> instead. </FormInfo>
                </Form>
    );
};

export default LoginForm;