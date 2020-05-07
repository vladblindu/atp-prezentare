import React from 'react'

const ContainerLeft =  ({ children, className}) => (
  <h1 className={`container px-16 pb-6 mx-auto px-8 lg:flex
     ${className}`}
  >
    {children}
  </h1>
)

export default ContainerLeft