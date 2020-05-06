import React from 'react'

const Title =  ({ children, className}) => (
    <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-none uppercase
     ${className}`}
    >
      {children}
    </h1>
)

export default Title