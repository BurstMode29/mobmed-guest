import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './forms.css';
import Polygon from '../images/polygon.png'

function LoginForm() {
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
                        <input type='text' placeholder='User ID' /><br></br>
                        <input type='text' placeholder='Password' />
                        <div className='Forgot'>Forgot Password?..</div>
                        <button type='submit' >LOGIN</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginForm
