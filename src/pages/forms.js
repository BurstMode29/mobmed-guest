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
                            <div className='FormLogo'><i class="fa-solid fa-heart-pulse"></i>MOB<span className='span1'>MED</span></div>
                            <div className='FormSlogan'>An <span className='span2'>online platform</span> made for medical services</div>
                            <div className='QuickLink'><a href="#"> Learn More</a></div>
                        </div>
                        <div className='TopRight'>
                            <div className='TopRightHeader'>DOCTOR APPLICATION FORM</div>
                            <div className='TopRightText'>
                                When completeing this form make sure that you have completed all the the required<br></br>
                                fields and provided MOBMED with relevant information and most recent<br></br>
                                documentation, if not your information will not be processed.
                            </div>
                        </div>

                    </div>
                    <div className='FormLine'></div>
                    <div className='SectionText'>
                        Please fill out the form and make sure to complete all sections within the form
                        and when you have completed all sections scrole down to the bottom of the page
                        and click the submit button.
                    </div>
                    <div className='PersonalInformation'>
                    <div className='SectionHeader'>PERSONAL INFORMATION</div>
                        <div className='Input1'>
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Name'/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default DoctorForm