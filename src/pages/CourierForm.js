import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './forms.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
import { useState } from 'react';

function CourierForm() {

    const auth = getAuth(app);
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const signUp = () =>{
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("succesfully created an account ")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
      });
}

    function validateForm(event) {
        event.preventDefault()
        let x = document.forms["myForm"]["name"].value;
        if (x == "" || x == null) {
            alert("Check if all fields are filled in correctly.");
            return true;
        }
    }


    return (
        <div className='CourierForm'>
            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            {/* Navigation */}

            <div className='FormArea'>
                <form className='Form' name='myForm' onSubmit={validateForm}>

                    <div className='FormHeader'>
                        <div className='TopLeft'>
                            <div className='TopLeftHeader'>COURIER APPLICATION FORM</div>
                            <div className='TopLeftText'>
                                When completeing this form make sure that you have completed all the the required
                                fields and provided MOBMED with relevant information and most recent
                                documentation, if not your information will not be processed.
                            </div>
                        </div>
                    </div>

                    <div className='SeperatorLine'><div className='FormLine'></div></div>

                    {/* <div className='SectionText'>
                        Please fill out the form and make sure to complete all sections within the form
                        and when you have completed all sections scrole down to the bottom of the page
                        and click the submit button.
                    </div> */}

                    <div className='Tab' id='Tab'>
                        <div className='PersonalInformation'>

                            <div className='Header-Droplist'>
                                <div className='SectionHeader'>PERSONAL INFORMATION</div>
                                {/* <div>

                                    <div>
                                        <label for='doctors'>Please specify:</label>
                                        <select id='type'>
                                            <option >None</option>
                                            <option value='practioner'>General Practioner</option>
                                            <option value='OB/GYN'>Obstetrician and Gynaecologist</option>
                                            <option value='psychiatrist'>Psychiatrist</option>
                                            <option value='Dentist'>Dentist</option>
                                            <option value='surgeon'>General Surgeon</option>
                                            <option value='dermatologist'>Dermatologist</option>
                                        </select>
                                    </div>
                                </div> */}
                            </div>

                            <div className='Input1' >

                                <div>
                                    <div className='Label'>Name</div><br></br>
                                    <input type="text" name='name' />
                                </div>
                                <div>
                                    <div className='Label'>Application Date</div><br></br>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Input2'>
                                <div>
                                    <div className='Label'>Surname</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label' >Password</div><br></br>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className='Input3'>
                                <div>
                                    <div className='Label'>City</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Province</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Postal Code</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Country</div><br></br>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='Input4'>
                                <div className='Label' >Email Address</div><br></br>
                                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className='Input5'>
                                <div>
                                    <div className='Label'>Cell</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Telephone</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Fax</div><br></br>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='Input6'>
                                <div>
                                    <div className='Label'>ID Number</div><br></br>
                                    <input type="text" />
                                </div>
                                <div>
                                    <div className='Label'>Citizenship</div><br></br>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Input7'>
                                <div className='Label'>Languages Spoken</div><br></br>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='Tab1' id='Tab1'>
                        <div className='ProfessionalInformation'>
                            <div className='SectionHeader1'>PROFESSIONAL INFORMATION</div>

                            <div className='Input7'>
                                <div className='Label'>Current Job Title</div><br></br>
                                <input className='JobTitle' type='text' />
                            </div>
                            <div className='Edu'>Education</div>
                            <div className='Education'>

                                <div>
                                    <input type='text' placeholder='Institution' />
                                    <br></br>
                                    <input type='text' placeholder='Programmer(if applicable):' />
                                </div>
                                <div>


                                    <input type='text' placeholder='Starting Date:' />
                                    <br></br>

                                    <input type='text' placeholder='Ending Date:' />

                                </div>
                            </div>
                            {/* <div className='Edu'>Medical Education</div>
                            <div className='MedicalEducation'>
                                <div>
                                    <input type='text' placeholder='Institution' /><br></br>
                                    <input type='text' placeholder='Programmer(if applicable):' />
                                </div>
                                <div>
                                    <input type='text' placeholder='Starting Date:' /><br></br>
                                    <input type='text' placeholder='Ending Date:' />
                                </div>
                            </div> */}

                            <div className='Input5'>
                                <input type='text' placeholder='Drivers License Type:' />
                                <input type='text' placeholder='Country:' />
                                <input type='text' placeholder='Date Issued:' />
                            </div>
                            <div>
                                <div className='SectionText'>
                                    This site and all its information is protected by the POPI Act of South Africa
                                    and all the information you provided will be handled according to the POPI Act,
                                    to continue your application please agree<br></br> to the terms.
                                </div>
                                <div className='CheckBox'><input type='checkbox' />I hereby agree to the terms.</div>
                            </div>
                        </div>
                    </div>
                    <div className='Input8'>
                        <button id='Click' type='submit' value='Submit' onClick={signUp}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CourierForm
