import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import DisplayDetails from './components/projects/DisplayDetails';
import SignUp from './components/auth/SignUp'
import AddPlayLIst from './components/projects/AddPlayLIst'
import SignIn from './components/auth/SignInPage'
import CreateDisplay from './components/projects/CreateDisplay';
import Upload from './components/projects/Upload';
import Profile from './components/projects/Profile'
import {
  authLogout,
  getAuthDetails
} from './store/actions/authAction'
function App() {
  const dispatch = useDispatch()
  const { isCheckLoggedIn,
    userData
  } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getAuthDetails())
  }, [])
  const userSignOut = () => {
    dispatch(authLogout())
  }
  return (
    <Router>
      <div className="App">
        <Navbar isCheckLoggedIn={isCheckLoggedIn} userData={userData} userSignOut={userSignOut} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/display/:id' element={<DisplayDetails />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addplaylist' element={<AddPlayLIst userData={userData} />} />
          <Route path='/create' element={<CreateDisplay userData={userData} />} />
          <Route path='/upload' element={<Upload userData={userData} />} />
          <Route path='/profile' element={<Profile userData={userData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;