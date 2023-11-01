import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const CopyRight = () => {
  return (
    <div className='card text-center'>
    <div style={{ backgroundColor: 'black' }}>
    <AiOutlineCopyrightCircle style={{ color: 'white', fontSize: 'x-large' }} />
    <span style={{ color: 'white', fontSize: 'small' }}>CopyRight All rights reserved 2021.</span>
    </div>
    </div>
    
  )
}

export default CopyRight
