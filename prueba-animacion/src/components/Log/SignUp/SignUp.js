import React, { useState } from 'react';
import {auth} from '../../../services/firebase';



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
    const handleSignUp = e =>{
        e.preventDefault();
        if (password === passwordConfirmation) {
            auth
              .createUserWithEmailAndPassword(email, password)
              .then(user => console.log(user))
              .catch(err => console.error(err));
          } else {
            alert('Password do not match');
          }
    }

    return (
      <div className="sign-up">
        <h1>Sign Up page</h1>
        <form>
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        </form>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
  };

  export default SignUp;