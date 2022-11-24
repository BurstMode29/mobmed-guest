import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DoctorForm from './pages/DoctorForm';
import CourierForm from './pages/CourierForm';





function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup@doctor' element={<DoctorForm />} />
          <Route path='/signup@courier' element={<CourierForm />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
