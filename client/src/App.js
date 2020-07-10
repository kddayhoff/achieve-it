import React from 'react';
import PageContainer from "./components/Container";


function App(){
    // const [signupUsername, setsignupUsername] = useState('');
    // const [signupPassword, setsignupPassword] = useState('');
    // const [loginUsername, setLoginUsername] = useState('');
    // const [loginPassword, setLoginPassword] = useState('');
    // const [data, setData] = useState(null);
    // const signup = () => {
    //     Axios({
    //         method: "POST",
    //         data: {
    //             username: signupUsername,
    //             password: signupPassword
    //         },
    //         withCredentials: true,
    //         url:"/signup"
    //     }).then((res) => console.log(res));
        
    // };
    // const login = () => { 
    //     Axios({
    //     method: "POST",
    //     data: {
    //         username: loginUsername,
    //         password: loginPassword
    //     },
    //     withCredentials: true,
    //     url:"/login"
    // }).then((res) => console.log(res));};

    // const getUser = () => {
    //     Axios({
    //         method: "GET",
    //         withCredentials: true,
    //         url:"/user"
    //     }).then((res) => {
    //         setData(res.data);
    //         console.log(res)
    //     });
    // };
         return(
            <div className= "App">
            
            {/* <div>
            <h1>Register</h1>

            <input 
            placeholder="username" 
            onChange={(e) => setsignupUsername(e.target.value)}
            />

            <input 
            placeholder="password" 
            onChange={(e) => setsignupPassword(e.target.value)}
            />

            <button onClick={signup}>Submit </button>
            
            </div>
            
            <div>
            <h1>Login</h1>
            
            <input 
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
            />
            
            <input 
            placeholder="password" 
            onChange={(e) => setLoginPassword(e.target.value)}
            />
            
            <button onClick={login}>Submit </button>
            </div> */}

            {/* <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit </button>
                {data ? <h1>hey there, {data.username}</h1> : null}
            </div> */}
            
            <PageContainer/>
            </div>
        );
    
}






export default App;