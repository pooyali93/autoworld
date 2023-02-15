import React from 'react'

const Banner = (props) => {

  document.title = 'Car Booking System' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Banner