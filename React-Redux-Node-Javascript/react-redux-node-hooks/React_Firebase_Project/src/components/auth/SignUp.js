import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  signUp,
  resetForm
} from '../../store/actions/authAction'
const SignUp = ({ userData }) => {

  const navigate = useNavigate();
  const { progress,
    snapshotStateMsg,
    loading,
    statusOfCreate,
    err,
  } = useSelector(state => state.auth)
  const [formState, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData(old => {
      const newState = { ...old }
      newState[e.target.id] = e.target.value;
      return newState
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formState))
  }
  useEffect(() => {
    if (statusOfCreate) {
      setTimeout(() => {
        setFormData({
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          phoneNumber: ''
        });
        navigate("/");
        dispatch(resetForm())
        // dispatch(getAuthDetails())
      }, 3000)
    }
  }, [statusOfCreate])
  return (
    <div className="container">
      {
        loading &&
        <div className="input-field">
          Loading...
        </div>
      }
      {err &&
        <h5 className='error'>{err}</h5>
      }
      {snapshotStateMsg &&
        <div >
          <h5 className='sucess'>{snapshotStateMsg}</h5>
        </div>
      }
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id='phoneNumber' onChange={handleChange} />
        </div>
        { }
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
