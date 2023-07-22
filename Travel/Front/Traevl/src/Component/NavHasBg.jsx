
import { useState } from 'react'
import '../Component/NavHasBg.css'

function NavHasBg() {
  const[Display , SetDisplay] = useState('None')

  function OpneCloseDisplay(){
    if (Display == "None"){
      SetDisplay(undefined)
    } else {
      SetDisplay("None")
    }
  }

  return (
    <div className='OutNavAndBg'>
      <div className='NavAndBg'>
        
        <div className='LogoNameAndThreeLineOfMenu'>
          <h1 className='LogoName'>Travel</h1>
          <button onClick={OpneCloseDisplay}><span id='ThreeLineOfMenu'>&#9776;</span></button>    
        </div>
      </div>
      <div className='Menu' style={{display:Display}}>
        <ul>
          <li>Home</li>
          <li>Destinations</li>  
          <li>Reservations</li>  
          <li>Amenities</li>  
          <li>Rooms</li>    
        </ul>  
      </div>
      <div className='TextAbsoloteBg'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aliquam voluptates ducimus. Ex eveniet repudiandae veniam dolor nulla officia enim. Eos doloremque modi aut neque expedita officiis earum quibusdam hic.</p>
      </div> 
    </div>
  )
}

export default NavHasBg