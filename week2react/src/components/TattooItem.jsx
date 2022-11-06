import React from 'react'

import './TattooItem.css'

export default function TattooItem({passData , onclickImg}) {
  // console.log(getData);

  return (
    <div className='tattoo-item'>
          <img 
          src={passData.sourceImg} 
          alt="" 
          onClick={function(){
            onclickImg(passData)
          }} />
          <h4>{passData.title}</h4>
    </div>
  )
}
