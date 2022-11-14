import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './forms.css';

function DoctorForm() {

    return (
        <div className="DoctorsForm">
            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            {/* Navigation */}

            <div className='FormArea'>
                <form className='Form'>

                    <div className='FormHeader'>
                        <div className='TopLeft'>
                            <div className='TopLeftHeader'>DOCTOR APPLICATION FORM</div>
                            <div className='TopLeftText'>
                                When completeing this form make sure that you have completed all the the required
                                fields and provided MOBMED with relevant information and most recent
                                documentation, if not your information will not be processed.
                            </div>
                        </div>
                    </div>

                    <div className='SeperatorLine'><div className='FormLine'></div></div>

                    <div className='SectionText'>
                        Please fill out the form and make sure to complete all sections within the form
                        and when you have completed all sections scrole down to the bottom of the page
                        and click the submit button.
                    </div>

                    <div className='PersonalInformation'>

                        <div className='Header-Droplist'>
                            <div className='SectionHeader'>PERSONAL INFORMATION</div>
                            <div>

                                <div>
                                    <label for='doctors'>Please specify:</label>
                                    <select id='type'>
                                        <option value='practioner'>General Practioner</option>
                                        <option value='OB/GYN'>Obstetrician and Gynaecologist</option>
                                        <option value='psychiatrist'>Psychiatrist</option>
                                        <option value='Dentist'>Dentist</option>
                                        <option value='surgeon'>General Surgeon</option>
                                        <option value='dermatologist'>Dermatologist</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='Input1'>
                            <input type="text" placeholder='Name' required />
                            <input type="text" placeholder='Application Date' required />
                        </div>
                        <div className='Input2'>
                            <div><input type="text" placeholder='Surname' required /></div>
                            <div><input type="text" placeholder='Address' required /></div>
                        </div>

                        <div className='Input3'>
                            <input type="text" placeholder='City' required />
                            <input type="text" placeholder='Province' required />
                            <input type="text" placeholder='Postal Code' required />
                            <input type="text" placeholder='Country' required />
                        </div>

                        <div className='Input4'><input type="text" placeholder='Email Address' required /></div>

                        <div className='Input5'>
                            <input type="text" placeholder='Cell' required />
                            <input type="text" placeholder='Telephone' required />
                            <input type="text" placeholder='Fax' required />
                        </div>

                        <div className='Input6'>
                            <input type="text" placeholder='ID Number' required />
                            <input type="text" placeholder='Citizenship' required />
                        </div>

                        <div className='Input7'><input type="text" placeholder='Languages Spoken' required /></div>

                    </div>

                    <div className='Input8'><input type='submit' ></input></div>
                </form>
            </div>
            <div className='PageNum'>Page 1/3</div>
        </div>
    )
}

export default DoctorForm