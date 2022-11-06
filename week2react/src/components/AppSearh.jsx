import React from 'react'
import './AppSearh.css'
export default function AppSearh({value,onValueChange}) {
  return (
    <div className="app-search">
        <input 
          type="text" 
          className="app-search-input" 
          placeholder="Looking For Tattoo test"  
          value={value}
          onChange={ (event) => {onValueChange(event.target.value)} }
        />
    </div>
  )
}
