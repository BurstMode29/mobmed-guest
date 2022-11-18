import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './forms.css';

function RegisterForm() {
    return (
        <div className='RegistrationForm'>
            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            {/* Navigation */}

            <div className='RegisterFormArea'>
                <div className='RegisterFormBox'>
                    <div className='RegFormHead'>
                        <div>
                            <div className='RegHead'>NEW PATIENT ENROLLMENT</div>
                            <div className='RegText'>This form is form individuals seeking medical attention or medication.</div>
                        </div>
                        <div className='RegIcon'><i class="fa-sharp fa-solid fa-hospital-user"></i></div>
                    </div>
                    <div className='LineBox'><div className='RegLine'></div></div>
                    <div>
                        <form>
                            <div className='RegInput1'>
                                <label>Name</label>
                                <input type='text' placeholder='First Name' />
                                <input type='text' placeholder='Surname' />
                            </div>
                            <div className='RegInput2'>
                                <label>DOB</label>
                                <input type='number' placeholder='Month' />
                                <input type='number' placeholder='Day' />
                                <input type='number' placeholder='Year' />
                            </div>
                            <div className='RegInput3'>
                                <label>Sex</label>
                                <select>
                                    <option>Please Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>N/A</option>
                                </select>
                            </div>
                            <div className='RegInput4'>
                                <label>Contact Number</label>
                                <input type='number' placeholder='(000) 000-0000' />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type='email' placeholder='myname@exapmle.com' />
                            </div>
                            <div>
                                <label>Address</label>
                                <input type='text' placeholder='Street Address' /><br></br>
                                <input type='text' placeholder='Street Address Line 2' /><br></br>
                                <input type='text' placeholder='City' />
                                <input type='text' placeholder='State/Province' /><br></br>
                                <input type='text' placeholder='Postal/Zip Code' />
                            </div>
                            <div>
                                <label>Marital Status</label>
                                <select>
                                    <option>Please Select</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Legally Seperated</option>
                                    <option>Widowed</option>
                                </select>
                            </div>
                            <div className='LineBox'><div className='RegLine'></div></div>
                            <div>
                                <label>Weight</label>
                                <input type='number' />
                            </div>
                            <div>
                                <label>Height</label>
                                <input type='number' />
                            </div>
                            <div>
                                <label>Taking any medications, currently?</label>
                                <input type='checkbox' />
                                <input type='checkbox' />
                            </div>
                            <div>
                                <label>If yes, please list it here</label><br></br>
                                <input type='text' placeholder='Description' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RegisterForm
