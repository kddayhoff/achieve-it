import React, {Component, useState} from 'react';
import PageContainer from "./components/Container";

function App(){
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

         return(
            <div className= "App">
            <div>
            <h1>Register</h1>
            <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
            <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
            </div>
            <div>
            <h1>Login</h1>
            <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
            <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
            </div>

            <div>
                <h1>Get User</h1>
                <button>Submit </button>
            </div>
            <PageContainer/>
            
            </div>
        );
    
}






export default App;