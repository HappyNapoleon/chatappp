import React from "react";
import {auth, provider} from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import './Login.css';

export default function Login(){
    

    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch((error) => alert(error.message));
    }
    return(
        <div className="black-box">
            <div className="yus">
                <div className="chatlogo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="122px" height="auto" alt=""/>
                </div>
                <p className="sign-in">Sign in</p>
                <div className="sign-in-button">
                  <button onClick={signIn} className="btn btn-outline-success">Sign in with Google</button>
                </div>
                <p style={{color: 'white', marginTop: '20px', textAlign: 'center'}}>Do not violate the community guidelines or you will be banned for life!</p>
            </div>
        </div>
    )
}