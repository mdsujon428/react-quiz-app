import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import FormInfo from '../Components/FormInfo';
import Form from '../Components/Pages/Form';
import TextInput from '../Components/TextInput';
import useFirebase from '../hooks/useFirebase';
import classes from '../styles/SignupForm.module.css';

const SignupForm = () => {
    const [newUser,setNewUser] = useState({});
    const [error ,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const {signupUser} = useFirebase()

    const history = useHistory();

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries());
        if(user.password !== user.confirmPassword){
           return setError("Password doesn't match!")
        }

        try {
            setError("");
            setLoading(true);
            await signupUser(user.email,user.password,user.username);
            history.push('/')
            console.log(user);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to create an account!")
        }
    }

    const onChange =(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
    }

    return (
        <Form style={{height:'500px'}} onSubmit={handleSubmit}>
        <TextInput 
        type="text"
        name="username"
        required
        placeholder="Enter your name"
        onChange={onChange}
        icon="person"/>

        <TextInput 
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        onChange={onChange} 
        icon="alternate_email"/>

        <TextInput 
        type="password" 
        name="password"
        required
        placeholder="Enter password"
        onChange={onChange}
        icon="lock"/>

        <TextInput 
        type="password"
        name="confirmPassword"
        required
        placeholder="Confirm password"
        onChange={onChange} 
        icon="lock_clock"/>

        <Checkbox 
        text="I agree to the Terms &amp; Conditions"
        />

        <Button disabled={loading} type="submit"> 
         <span> Submit now</span>
        </Button>
        {error && <p className={classes.error}>{error}</p>}
        <FormInfo> 
           Already have an account? <Link to="/login">Login</Link> instead.
        </FormInfo>
      </Form>
    );
};

export default SignupForm;