import React from 'react'
import errorImg from '../../assets/images/notfound.jpg';

const Error404 = () => {
  return (
    <div className='my-5' style={{display:'flex', justifyContent:'center'}}>
        <figure><img src={errorImg} alt="Shoes" /></figure>
    </div>
  )
}

export default Error404