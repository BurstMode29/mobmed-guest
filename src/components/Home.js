import React from 'react'
import contact from '../images/contact_us.png';
import bag from '../images/MobmedBag.png';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import ToolTips from './ToolTips';

function Home() {
    return (
        <div>

            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            {/* Navigation */}

            <div className='Home'>
                <div className='HomeContent1'>
                    <div className='Pulse' id='Pulse'><i class="fa-solid fa-heart-pulse" id='PulseIcon'></i></div>
                    <div className='Header1'>YOUR DOCTOR ON HAND</div>
                    <div className='Text1'>"ready to answer your call..."</div>
                    <div className='Text2'>An <span className='span2'>online platform</span> made for medical services click to join.</div>
                </div>


                <div className='MainContent'>

                    <Link className='SignUpDoctor' to='/signup@doctor'><div className='content1'>
                        <div>
                            <div><i class="fa-solid fa-user-doctor"></i></div>
                            <div>DOCTOR</div>
                            {/* <p>Are you a doctor looking for better ways to market your service/profession click here to sign up!</p> */}
                        </div>

                    </div></Link>

                    <Link className='SignUpCourier' to='/signup@courier'>
                        <div className='content2'>
                            <div>
                                <div><i class="fa-solid fa-truck-medical"></i></div>
                                <div>COURIER</div>
                                {/* <p>Interested on lending a helping hand to earn an extra income, click here to sign up as a mobmed courier.</p> */}
                            </div>

                        </div>
                    </Link>

                    <Link className='SignUpPharmacy' to='/signup@pharmacy'>
                        <div className='content3'>
                            <div>
                                <div><i class="fa-solid fa-prescription-bottle-medical"></i></div>
                                <div>PHARMACY</div>
                                {/* <p>Sell your medical products/cosmetics online using mobmeds ecommerce platform, click here to sign up as a pharmacists.</p> */}
                            </div>

                        </div>
                    </Link>


                </div>

                <div className='Continue'>
                    <div >
                        <p>LEARN MORE</p>
                        <div className='ArrowBox'><i class="fa-sharp fa-solid fa-arrow-down"></i></div>
                    </div>
                </div>

            </div>

            <div className='WhosMobmed'>
                <div className='InfoContent'>

                    <div className='InfoContentText'>
                        <div className='Header2'>WHO IS MOBMED?</div>
                        <div className='LineBox'><div className='Line'></div></div>
                        <p> Mobmed is an online platform, designed and built for the medical industry,
                            for doctors and pharmacists to provide potential patients with services or have
                            there medication delivered at the comforts of their own home.
                        </p>
                    </div>

                    <div className='ImageBox'>
                        <img src={bag} />
                    </div>
                </div>
            </div>

            <div className='OurServices'>

                <div className='ExtraContent'>

                    <div className='Icons'>

                        <div>
                            <div className='DiamondIcon1' id='Diamond1'>
                                <div className='D1'><i class="fa-sharp fa-solid fa-clock">
                                    <div className='TT1'>
                                        <Routes>
                                            <Route path='/' element={<ToolTips />} />
                                        </Routes>
                                    </div>
                                </i>
                                </div>
                                <div className='D2'><i class="fa-solid fa-computer"></i></div>
                            </div>

                            <div className='DiamondIcon2'><div className='D3'><i class="fa-solid fa-truck-medical"></i></div></div>
                            <div className='DiamondIcon3'><div className='D4'><i class="fa-solid fa-prescription-bottle-medical"></i></div><div className='D5'><i class="fa-solid fa-user-doctor"></i></div></div>
                        </div>
                    </div>

                    <div className='ServicesInfo'>

                        <div className='ServiceInfoContent'>

                            <div className='ServiceInfoText'>
                                <div>
                                    <div className='Header3'>OUR SERVICES</div>
                                    <div className='LineBox'><div className='Line1'></div></div>

                                    <div className='OurServicesTextBox'>
                                        <p>
                                            Mobmed offers 24 hour medical assistance, make and enquiry now.<br></br><br></br>
                                            With Mobmeds Mobile Online Platform its possible to
                                            connect with Mobmed on any device via browser or app.<br></br><br></br>
                                            Order your medication from trusted pharmacies all around South Africa
                                            and have it delivered by a courier you can trust, or simply collect in
                                            a store closest to your home whenever you're ready.<br></br><br></br>
                                            Have your doctor pay you a visit, at your home by making
                                            a doctors appointment with Mobmed.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className='WhoUseMobmed'>
                <div className='HeaderSection'>
                    <div>
                        <div className='Header4'>WHO USES MOBMED?</div>
                        <div className='LineBox'><div className='Line2'></div></div>
                        <p className='ServiceProvidersText'>
                            Mobmed is designed for a variety of users whether you require
                            medical attention or a business selling products or providing a service.
                        </p>
                    </div>
                </div>
                <div className='ServiceProviders'>
                    <div className='ContentBoxs'>
                        {/* <div className='MoveLeft' onClick={MoveLeft}><i class="fa-solid fa-chevron-left"></i></div> */}
                        <div className='ContentBox1'>
                            <div>
                                <div className='ContentBoxImage1'></div>
                                <div className='ContentHeader1'>DOCTORS</div>
                                <p className='ContentBoxText1'>
                                    Whether you're a doctor working for a company or just by profession
                                    Mobmed will always have patients that require your services.
                                </p>
                                <div className='ContentBoxIcons'>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>

                        </div>
                        <div className='ContentBox2'>

                            <div>
                                <div className='ContentBoxImage2'></div>
                                <div className='ContentHeader2'>DRIVERS</div>
                                <p className='ContentBoxText2'>
                                    Looking for a part-time job or make it full-time, Mobmed
                                    requires professional drivers to form part of a great courier team.
                                </p>
                                <div className='ContentBoxIcons'>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>

                        </div>

                        <div className='ContentBox3'>
                            <div>

                                <div className='ContentBoxImage3'></div>
                                <div className='ContentHeader3'>PHARMACISTS</div>
                                <p className='ContentBoxText3'>
                                    Minim fugiat id ipsum quis laborum reprehenderit adipisicing pariatur aliquip amet.
                                    Aute in exercitation nisi anim est cillum aliquip mollit tempor aliqua sint.
                                </p>
                                <div className='ContentBoxIcons'>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className='LearnMore'>
                <div className='ExtraContent2'>
                    <div>
                        <div className='ExtraContentHeader'>
                            <p className='ExtraContentText1'>Occaecat nisi qui mollit voluptate voluptate id officia?</p>
                            <div className='LineBox'><div className='Line3'></div></div>
                            <p className='ExtraContentText2'>Occaecat nisi qui mollit voluptate voluptate id officia consectetur dolore do in.</p>
                        </div>
                        <div className='ExtraContentButtons'>
                            <div><button className='SignUp'>SIGN UP</button></div><br></br>
                            <div><button className='LearnMoreButton'>LEARN MORE</button></div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='ContactUs'>
                <div className='ContactUsContent'>
                    <div className='ImageBox2'><img src={contact}></img></div>
                    <div>
                        <Routes>
                            <Route path='/' element={<ContactForm />} />
                        </Routes>
                    </div>
                </div>
            </div>


            <div className='footer'>
                <div className='FooterContent'>
                    <div>
                        <div className='FooterIcons'><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
                        <div className='FooterText'>© MOBMED | MOBILE MEDICATION</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
