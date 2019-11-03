import React, { useState } from 'react';
import {auth} from '../../../services/firebase';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = e => {
        e.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .then(user => console.log(user))
          .catch(err => console.error(err));
      };

      
    return (
      <div className="sign-in">
        <h1>Sign in page</h1>
        <form>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </form>
        <button onClick={handleSignIn}>Submit</button>
      </div>
    );
  };
  
export default SignIn;