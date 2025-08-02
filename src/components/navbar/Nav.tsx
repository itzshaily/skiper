import React from 'react'
import Navpart1 from './Navpart1'
import Navpart2 from './Navpart2'


const Nav = () => {
  return (
    <div className='flex justify-between items-center py-2 px-5 '>
     <Navpart1 />
     <Navpart2 />
    </div>
  )
}

export default Nav
