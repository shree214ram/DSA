const Profile = ({ userData }) => {
  return (
    <div className="container">{userData && userData.profileData &&
      <form className="white" >
        <h5 className="grey-text text-darken-3">Profile Details</h5>
        <div className="input-field">
          Display Name : {userData?.displayName}
        </div>
        <div className="input-field">
          email : {userData?.email}
        </div>
        <div className="input-field">
          Phone Number : {userData?.phoneNumber}
        </div>
        <div className="input-field">
          First Name : {userData?.profileData?.data?.fName}
        </div>
        <div className="input-field">
          Last Name : {userData?.profileData?.data?.lName}
        </div>
        <div className="input-field">
        Organization : {userData?.profileData?.data?.org}
        </div>
        <div className="input-field">
        Role : {userData?.profileData?.data?.role}
        </div>
      </form>}
    </div>
  )
}

export default Profile