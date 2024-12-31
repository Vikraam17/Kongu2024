import React from 'react'
import Stomach from './Stomach'

const HalfBoil = ({need}) => {
  return (
    <div>
      <h1>Halfboil</h1>
      <Stomach need={need}/>
    </div>
  )
}

export default HalfBoil