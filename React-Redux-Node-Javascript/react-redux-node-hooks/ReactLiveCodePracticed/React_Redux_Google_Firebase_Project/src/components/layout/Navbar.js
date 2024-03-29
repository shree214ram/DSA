import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({isCheckLoggedIn,userData,userSignOut}) => {
  
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MyStoreMyWeb</Link>
        {isCheckLoggedIn ?
          <SignedInLinks userData={userData} userSignOut={userSignOut} /> :
          <SignedOutLinks />
        }
      </div>
    </nav>
  )
}

export default Navbar

