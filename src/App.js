import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DoctorForm from './pages/DoctorForm';
import CourierForm from './pages/CourierForm';
import PharmacyForm from './pages/PharmacyForm';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';



function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup@doctor' element={<DoctorForm />} />
          <Route path='/signup@courier' element={<CourierForm />} />
          <Route path='/signup@pharmacy' element={<PharmacyForm />} />
          <Route path='/login@mobmed' element={<LoginForm />} />
          <Route path='/register@mobmed' element={<RegisterForm />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
