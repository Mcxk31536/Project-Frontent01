import React from 'react'
import '../Component/Camp.css'

function Rooms() {
  return (
    <div className='Camp'>
      <div>
        <div className='AllPhotoCamp'>
        <img src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='PhotoCamp' id='PhotoCamp1'/>
        <img src="https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='PhotoCamp' id='PhotoCamp2'/>
        <img src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='PhotoCamp' id='PhotoCamp3'/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident consequuntur obcaecati cumque libero expedita ipsum, voluptatibus ab at consectetur asperiores necessitatibus, magnam corrupti harum! Veniam assumenda a sequi tempore.</p>
      </div>
    </div>
  )
}

export default Rooms