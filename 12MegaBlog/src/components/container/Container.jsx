import React, { children } from 'react'

function Container() {
  return (
    <div className='w-full mx-auto max-w-7xl px-4'>
      {children}
    </div>
  )
}

export default Container
