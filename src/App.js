import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DoctorForm from './pages/forms';




function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup@doctor' element={<DoctorForm />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
