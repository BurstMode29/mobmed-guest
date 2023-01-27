import app from './firebase';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './forms.css';
import Polygon from '../images/polygon.png'
import { useState } from 'react';

function LoginForm() {
<<<<<<< HEAD
    // firebase
const auth = getAuth(app); 

    
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const signIn = () =>{

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("SignIn succesfully ")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
      });
// firebase
=======
// firebase
const auth = getAuth(app); 

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () =>{
   
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("SignIn succesfully ")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode)
          });
// firebase

>>>>>>> e427bc6ca6c5ba98ef3b25da8b5f3d65cfee91c4
    return (
        <div className='LoginForm'>
            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            {/* Navigation */}

            <img className='Polygon' src={Polygon} />

            <div className='loginForm'>
                <form>
                    <div>
                        <div className='LoginFormHeader'>LOGIN</div>
                        <div className='LoginFormText'>Welcome back!</div>
<<<<<<< HEAD
                        <input type='email' placeholder='User ID' onChange={(e) => setEmail(e.target.value)} /><br></br>
=======
                        <input type='email' placeholder='User ID' onChange={(e) => setEmail(e.target.value)}/><br></br>
>>>>>>> e427bc6ca6c5ba98ef3b25da8b5f3d65cfee91c4
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        <div className='Forgot'>Forgot Password?..</div>
                        <button type='submit' onClick={signIn}>LOGIN</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
}
export default LoginForm
