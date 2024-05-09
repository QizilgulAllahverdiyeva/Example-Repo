import React from 'react'

const NewsLetter = () => {
  return (
    <div className='letter'>
        <div>
            <h1>Newsletter</h1>
            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div>
            <input placeholder='Your Email' type="email" />
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter