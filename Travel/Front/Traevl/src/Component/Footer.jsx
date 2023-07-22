import React from 'react'
import '../Component/Footer.css'

function Footer() {
  return (
    <footer>
        <div className='footertop'>
            <ul>
                <h4>Travel</h4>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad?</li>
            </ul>
            <ul>
                <h4>About</h4>
                <li>Home</li>
                <li>Festures</li>
                <li>FAQs</li>
                <li>Reviews</li>
                <li>Stories</li>
            </ul>
            <ul>
                <h4>Privacy</h4>
                <li>Privacy</li>
                <li>Policy</li>
                <li>Patment</li>
                <li>Terms</li>
            </ul>
            <ul>
                <h4>Contact Us</h4>
                <li style={{width:100}}>+012 345 6789</li>
            </ul>
        </div>
        <div className='footerbottom'>
            <ul className='footerbottomleft'>
                <li>Copyright 439X Travel.All rights reserved</li>
            </ul>
            <ul className='footerbottomright'>
                <li>Contact Us</li>
                <li>Terms</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer