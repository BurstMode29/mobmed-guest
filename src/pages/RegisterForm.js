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
                    <form>
                        <div className='RegFormHead'>
                            <div>
                                <div className='RegHead'>NEW PATIENT ENROLLMENT</div>
                                <div className='RegText'>This form is form individuals seeking medical attention or medication.</div>
                            </div>
                            <div className='RegIcon'><i class="fa-sharp fa-solid fa-hospital-user"></i></div>
                        </div>
                        <div className='LineBox'><div className='RegLine'></div></div>


                        <div className='RegInput1'>
                            <div className='RegLabels'><label>Name</label></div>
                            <div className='RegInputs'>
                                <input type='text' placeholder='First Name' />
                                <input type='text' placeholder='Surname' />
                            </div>
                        </div>
                        <div className='RegInput2'>
                            <div className='RegLabels'><label>DOB</label></div>
                            <div className='RegInputs'>
                                <input type='number' placeholder='Month' />
                                <input type='number' placeholder='Day' />
                                <input type='number' placeholder='Year' />
                            </div>

                        </div>
                        <div className='RegInput3'>
                            <div className='RegLabels'><label>Sex</label></div>
                            <div className='RegInputs'>
                                <select>
                                    <option>Please Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>N/A</option>
                                </select>
                            </div>

                        </div>
                        <div className='RegInput4'>
                            <div className='RegLabels'><label>Contact Number</label></div>
                            <div className='RegInputs'>
                                <input type='number' placeholder='(000) 000-0000' />
                            </div>
                        </div>

                        <div className='RegInput5'>
                            <div className='RegLabels'><label>Email</label></div>
                            <div className='RegInputs'>
                                <input type='email' placeholder='myname@example.com' />
                            </div>
                        </div>

                        <div className='RegInput6'>
                            <div className='RegLabels'><label>Address</label></div>
                            <div className='RegInputs'>
                                <input type='text' placeholder='Street Address' /><br></br>
                                <input type='text' placeholder='Street Address Line 2' /><br></br>
                                <input type='text' placeholder='City' /><br></br>
                                <input type='text' placeholder='State/Province' /><br></br>
                                <input type='text' placeholder='Postal/Zip Code' />
                            </div>

                        </div>

                        <div className='RegInput7'>
                            <div className='RegLabels'><label>Marital Status</label></div>
                            <div className='RegInputs'>
                                <select>
                                    <option>Please Select</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Legally Seperated</option>
                                    <option>Widowed</option>
                                </select>
                            </div>
                        </div>

                        <div className='LineBox'><div className='RegLine'></div></div>

                        <div className='RegInput8'>
                            <div className='RegLabels'><label>Weight</label></div>
                            <div className='RegInputs'>
                                <input type='number' />
                            </div>
                        </div>

                        <div className='RegInput9'>
                            <div className='RegLabels'><label>Height</label></div>
                            <div className='RegInputs'>
                                <input type='number' />
                            </div>
                        </div>

                        <div className='RegInput10'>
                            <div className='RegLabels'><label>Taking any medications, currently?</label></div>
                            <div className='RegInputs'>
                                <div><input type='checkbox' />Yes</div><br></br>
                                <div><input type='checkbox' />No</div>
                            </div>
                        </div>

                        <div className='RegInput11'>
                            <div className='RegLabels'><label>If yes, please list it here</label></div>
                            <div className='RegInputs'>
                                <input type='text' placeholder='Description' />
                            </div>
                        </div>

                        <button className='Enroll' type='submit'>ENROLL</button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default RegisterForm
