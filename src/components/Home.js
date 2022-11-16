import React from 'react'
import contact from '../images/contact_us.png';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';

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
                            <div>DOCTORS</div>
                            <p>Are you a doctor looking for better ways to market your service/profession click here to sign up!</p>
                        </div>

                    </div></Link>

                    <Link className='SignUpCourier' to='/signup@courier'>
                        <div className='content2'>
                            <div>
                                <div><i class="fa-solid fa-truck-medical"></i></div>
                                <div>COURIERS</div>
                                <p>Interested on lending a helping hand to earn an extra income, click here to sign up as a mobmed courier.</p>
                            </div>

                        </div>
                    </Link>

                    <div className='content3'>
                        <div>
                            <div><i class="fa-solid fa-prescription-bottle-medical"></i></div>
                            <div>PHARMACIES</div>
                            <p>Sell your medical products/cosmetics online using mobmeds ecommerce platform, click here to sign up as a pharmacists.</p>
                        </div>

                    </div>

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
                        <p> Velit ex Lorem in sunt officia aliquip nisi excepteur aliquip quis nisi ut.
                            Est est duis elit eiusmod ad id irure est enim nisi culpa. Velit non ullamco cillum sunt occaecat ea cillum adipisicing mollit et.
                            Aliqua sunt cupidatat labore non Lorem in cupidatat duis. Consectetur velit exercitation nisi cupidatat nisi amet nulla.
                            Consectetur occaecat eu et non reprehenderit elit aute est adipisicing nisi sint.
                        </p>
                    </div>

                    <div className='ImageBox'></div>
                </div>
            </div>

            <div className='OurServices'>

                <div className='ExtraContent'>

                    <div className='Icons'>
                        <div>
                            <div className='DiamondIcon1'><div className='D1'><i class="fa-sharp fa-solid fa-clock"></i></div><div className='D2'><i class="fa-solid fa-computer"></i></div></div>
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
                                            Elit aute tempor adipisicing sunt proident quis id deserunt aliquip cupidatat irure ipsum. Reprehenderit consequat ullamco cillum aliquip cupidatat ipsum est eiusmod nisi dolore do proident sint. Qui anim proident qui occaecat Lorem excepteur amet occaecat est.
                                            Nulla culpa minim nostrud sunt eiusmod nisi. Ipsum voluptate enim Lorem commodo non mollit Lorem aute laboris nostrud minim sit sint. Culpa adipisicing labore velit esse sint nulla exercitation dolor magna occaecat nulla sint. Ad tempor in anim non exercitation sunt anim cillum.
                                            Consectetur magna amet sint sint. Nulla consectetur dolor reprehenderit adipisicing laboris voluptate ipsum id ullamco minim qui ullamco qui.<br></br>
                                            Minim incididunt occaecat sint voluptate ea dolore Lorem proident voluptate occaecat esse id do. Ex laborum veniam adipisicing occaecat incididunt labore occaecat culpa occaecat pariatur.
                                            Duis do do ipsum eiusmod laboris. Est anim mollit magna anim.<br></br> <br></br>
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
                            Duis aliqua pariatur ut enim aliqua proident enim officia do ex tempor cillum amet ullamco.
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
                        <div className='ContentBox2'>

                            <div>
                                <div className='ContentBoxImage2'></div>
                                <div className='ContentHeader2'>DRIVERS</div>
                                <p className='ContentBoxText2'>
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
                        <form className='ContactForm'>

                            <div>
                                <div className='Header5'>CONTACT US</div>
                                <p>Occaecat pariatur sint aliquip labore aliqua sunt id consequat do anim. Minim sunt cupidatat veniam veniam aute.</p>
                                <div className='Inputs'>
                                    <input className='Name' type='text'></input><br></br>
                                    <input className='Email' type='email'></input><br></br>
                                    <input className='Message' type='text'></input><br></br>
                                    <input className='Submit' type='submit'></input>
                                </div>
                            </div>
                        </form>
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
