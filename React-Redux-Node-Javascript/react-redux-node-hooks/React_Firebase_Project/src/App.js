import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import DisplayDetails from './components/projects/DisplayDetails';
import SignUp from './components/auth/SignUp'
import AddPlayLIst from './components/projects/AddPlayLIst'
import SignIn from './components/auth/SignInPage'
import CreateDisplay from './components/projects/CreateDisplay';
import Upload from './components/projects/Upload';
import Test from './components/projects/test'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "./firebase"
function App() {
  const [isCheckLoggedIn, setLoginState] = useState(false)
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user, "LOGGED IN USER DATA");
        setLoginState(true)
        setUserData(user)
        // ...
      } else {
        // User is signed out
        // ...
        setLoginState(false)
        setUserData(null)
      }

    });
    return () => {
      listen();
    }
  }, [])
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Signed out 
        console.log(" Signed out")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage=>", errorMessage, "errorCode=>", errorCode)
      });
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
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;