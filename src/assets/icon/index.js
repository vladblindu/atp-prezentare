import React from 'react'
import icons from './icons-lib'
import {SIZES, SMALL} from './sizes'

const Icon = ({type, size = SMALL, className}) =>
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         height={SIZES[size]}
         width={SIZES[size]}
         className={className}>
        {icons[type]}
    </svg>

export default Icon