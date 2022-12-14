import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Mobile from './Mobile'

function Navigation() {
    return (
        <div>


            <div className='Logo'>

                <Link className='NavigationHome' to='/'><div className='MenuLogo'><i class="fa-solid fa-heart-pulse"></i>MOB<span className='span1'>MED</span></div></Link>

                <div className='Navigation' id='Nav'>
                    <div className='NavLinks' id='Links'>
                        <div className='LoginLink' id='LoginLink'><Link to='/login@mobmed' >LOGIN</Link>
                            <div className='DesktopLoginDropDown' id='DLDropList'>
                                <div className='DesktopLoginContent' id='DLC'><i class="fa-solid fa-user-doctor"></i><a href='#'>DOCTOR</a></div>
                                <div className='DesktopLoginContent1' id='DLC1'><i class="fa-solid fa-truck-medical"></i><a href='#'>COURIERS</a></div>
                                <div className='DesktopLoginContent2' id='DLC2'><i class="fa-solid fa-prescription-bottle-medical"></i>PHARMACIES</div>
                                <div className='DesktopLoginContent3' id='DLC3'><i class="fa-solid fa-sort"></i></div>
                            </div>
                        </div>
                        <div><Link to='/register@mobmed'><a href='#'>REGISTER</a></Link></div>
                        <div><a href='#'>ABOUT</a></div>
                        <div><a href='#'>SERVICES</a></div>
                        <div><a href='#'>CONTACT</a></div>
                    </div>
                </div>

            </div>
            {/* Navigation */}
            <Routes>
                <Route path='/' element={<Mobile />} />
            </Routes>
            {/* Navigation */}
        </div>
    )
}

export default Navigation
