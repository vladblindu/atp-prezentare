import React from 'react'

const Subtitle =  ({ children, className}) => (
  <h3 className={`mt-12 text-2xl lg:text-3xl xl:text-4xl font-bold leading-none uppercase
     ${className}`}
  >
    {children}
  </h3>
)

export default Subtitle