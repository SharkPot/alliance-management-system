import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken'; 
import googleCreds from '../credentials.js';

const clientId = googleCreds.clientID;

function Login() {
    console.log('googleCreds',googleCreds);
    const onSuccess = (res) => {
        console.log('onSuccess:currentUser',res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('onFailure:res',res);
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    })
    return (
        <button onClick={signIn} className='button'>
            <span className='buttonText'>Sign in with Google</span>
        </button>
    )
}

export default Login;