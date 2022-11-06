import React from 'react'
import './TattooPost.css'


export default function TattooPost({tattoo,onBgclick}) {
  return (
    <div className="tattoo-post" >
      <div className='tattoo-bg' onClick={onBgclick}> 
          <div className='tattoo-content'>
              <img src={tattoo.fullImg} alt="" />
              <h4>{tattoo.title}</h4>
          </div>
      </div>
    </div>
  )
}
