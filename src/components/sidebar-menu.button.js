import React from 'react'
import Icon from './../assets/icon'

const SidebarMenu = ({opened, className, onClick}) =>
    <button
        onClick={onClick}
        className={className + ' outline-none focus:outline-none'}>
        <Icon
            type={opened ? 'menu' : 'close'}
            className="fill-current"/>
    </button>

export default SidebarMenu