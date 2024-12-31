import React from 'react'
import HalfBoil from './halfBoil'


const Egg = ({need}) => {
  return (
    <div>
      <h1>Egg</h1>
      <HalfBoil need={need}/>      
    </div>
  )
}

export default Egg