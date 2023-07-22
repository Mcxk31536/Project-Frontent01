import React from 'react'
import '../Component/Photo.css'

function Photo() {
  return (
    <div className='BoxCpnPhoto'>
      <div className='MenuAbove5Photo'>
        <ul>
          <li>Booking Incentives</li>
          <li>Competitive Rates</li>
          <li>Book With Flexibility</li>
          <li>Trip Insurance</li>
        </ul>
      </div>
      <div className='Photo'>
        <div className='Photo1'>
          <img src="https://images.pexels.com/photos/2916819/pexels-photo-2916819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='img1'/>
          <img src="https://images.pexels.com/photos/2916818/pexels-photo-2916818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='img2'/>
          <img src="https://images.pexels.com/photos/3521062/pexels-photo-3521062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='img3'/>
        </div>
        <div className='Photo2'>
          <img src="https://images.pexels.com/photos/3073305/pexels-photo-3073305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='img4'/>
          
          <img src="https://images.pexels.com/photos/3042515/pexels-photo-3042515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""id='img5'/>
        </div>
        
      </div>
      <p id='DescriptBelowPhoto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut reprehenderit omnis sunt a ullam sint modi atque blanditiis labore adipisci. Beatae sed odit quasi mollitia atque veritatis id autem voluptatum?</p>
      <button className='Readmore'>Read more</button>
    </div>
  )
}

export default Photo