import React from 'react'

const Heading =  ({ children, className}) => (
  <h2 className={`text-3xl lg:text-5xl font-semibold uppercase
     ${className}`}
  >
    {children}
  </h2>
)

export default Heading