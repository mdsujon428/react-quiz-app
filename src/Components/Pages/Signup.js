import { useState } from 'react';
import signupImage from '../../assets/images/signup.svg';
import useFirebase from '../../hooks/useFirebase';
import SignupForm from '../SignupForm';
import Illustration from './Illustration';



const Signup = () => {
    const [newUser,setNewUser] = useState({});

    const {signupUser} = useFirebase()

    const onSubmit =(e)=>{
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries());
        signupUser(user.email,user.password,user.username);
        console.log(user)
        e.preventDefault()
    }

    const onChange =(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
    }
    return (
        <>   
            <h1>Create an account</h1>
            <div className='column'>
           
                <Illustration alt="Signup" IllustrationImage={signupImage}/>
                {/* <Form className={`${classes.signup} form`} onSubmit={onSubmit}>
                  <TextInput 
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  onChange={onChange}
                  icon="person"/>

                  <TextInput 
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={onChange} 
                  icon="alternate_email"/>

                  <TextInput 
                  type="password" 
                  name="password"
                  placeholder="Enter password"
                  onChange={onChange}
                  icon="lock"/>

                  <TextInput 
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={onChange} 
                  icon="lock_clock"/>

                  <Checkbox 
                  text="I agree to the Terms &amp; Conditions"
                  />

                  <Button type="submit"> 
                   <span> Submit now</span>
                  </Button>

                  <FormInfo> 
                     Already have an account? <Link to="/login">Login</Link> instead.
                  </FormInfo>
                </Form> */}

                <SignupForm/>
            </div>
        </>
    );
};

export default Signup;