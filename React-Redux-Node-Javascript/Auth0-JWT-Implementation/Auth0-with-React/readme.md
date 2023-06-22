https://www.youtube.com/watch?v=T1wbLNvQImk&ab_channel=ThapaTechnical

https://auth0.com/docs/quickstart/spa/react/interactive

1. crearte client id 
2. install auth0/react-auth0
3. Create Provider at main componenet 
 import {Authprovider}  from "auth0/react-auth0"

 <script>
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import { Auth0Provider } from '@auth0/auth0-react';
    import App from './App';

    const root = createRoot(document.getElementById('root'));

    root.render(
    <Auth0Provider
        domain="{yourDomain}"
        clientId="{yourClientId}"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
    );
</script>

4. Add Login Button in "Login Componenet"
 <script>

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
</script>

5. Add Profile "User Details in Profile Componenet"

 <script>
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
</script>
 