import React from 'react'

function Mobile() {
    return (
        <div>
            <div className='MobileNav' id='MNav'>
                <div className='MobileNavHead'>
                    <div className='NavLogo'><i class="fa-solid fa-heart-pulse"></i>MOB
                        <span className='span3'>MED</span></div>
                    <p>An <span className='span2'>online platform</span> made for medical services click to join.</p>
                </div>

                <div className='LoginMobile' >
                    <div className='MobileLoginButton' >
                        <div className='LoginDrop'><i class="fa-solid fa-user-doctor"></i></div>
                        <div className='LoginMobileText'>LOGIN</div>
                        <div className='LoginArrow' id='LoginArrow'><i class="fa-solid fa-sort"></i></div>
                    </div>

                    <div className='LoginTransition' id='LoginDrop'>
                        <div className='MobileLoginContent' id='LoginContent'>
                            <div className='LoginBox1' id='LB1'><i class="fa-solid fa-user-doctor"></i>DOCTOR</div>
                            <div className='LoginBox2' id='LB2'><i class="fa-solid fa-truck-medical"></i>DRIVER</div>
                            <div className='LoginBox3' id='LB3'><i class="fa-solid fa-prescription-bottle-medical"></i>PHARMACY</div>
                            <div className='LoginBox4' id='LB4'></div>
                        </div>

                    </div>
                </div>

                <div className='MobileLinks' id='MLinks'>
                    <div className='SignUpLink'><a href='#'>SIGN UP</a></div>
                    <div><a href='#'>ABOUT</a></div>
                    <div><a href='#'>SERVICES</a></div>
                    <div><a href='#'>CONTACT</a></div>
                </div>

                <div className='MobileMenuFooter'>
                    <div><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
                    <p>© MOBMED | MOBILE MEDICATION</p>
                </div>
            </div>
        </div>
    )
}

export default Mobile
