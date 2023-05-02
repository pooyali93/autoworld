import React from 'react'
import './Banner.css'

export default function Banner (props) {

  document.title = 'Car Booking System' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
};