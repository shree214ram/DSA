import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)
  const handleChange = (e) => {
    setFormState(old => {
      const newState = { ...old }
      newState[e.target.id] = e.target.value;
      return newState
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`${errorCode} : ${errorMessage}`)
      });
  }
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={handleChange} />
        </div>
        {error &&
            <> <span style={{ color: "red" }}>{error}</span><br /></>
          }
        <div className="input-field">
          
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn