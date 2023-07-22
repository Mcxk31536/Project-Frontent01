import React, { useState } from 'react'
import '../Component/PhotoOfFoodSlide.css'

function PhotoOfFoodSlide() {
    const[ NumPhoto , SetNumPhoto ] = useState(0);
    const person = [
    {LinkPhoto:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" },
    {LinkPhoto:"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {LinkPhoto:"https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {LinkPhoto:'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=600'},
    ];
    
    function ClickChangePhotoRight(){
        // console.log("Person",person.length)
        if ( NumPhoto >= 0 && NumPhoto < person.length-1){
            SetNumPhoto(NumPhoto => NumPhoto+1)
            // console.log("Right", NumPhoto+1)
        } else{ SetNumPhoto(NumPhoto)}
    }
    function ClickChangePhotoLeft(){
        // console.log("Person",person.length -1)
        if ( NumPhoto > 0 && NumPhoto < person.length){ 
            SetNumPhoto(NumPhoto => NumPhoto-1);
            // console.log( "Left",NumPhoto-1)
        } else{ SetNumPhoto(NumPhoto)}
    }
    return (
        <div className="PhotoOfFoodSlide" >
            <div className='BtnAndPhoto'>
                <button onClick={ClickChangePhotoLeft} className='btn'>&#10096;</button>
                 <img src={person[NumPhoto].LinkPhoto} alt="" className='img-PhotoOfFoodSlide' />
                <button onClick={ClickChangePhotoRight} className='btn'>&#10097;</button>
            </div>
        </div>
    )
}

export default PhotoOfFoodSlide