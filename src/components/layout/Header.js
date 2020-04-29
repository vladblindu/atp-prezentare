import React, { useState } from 'react'
import BodyHeader from '../header/BodyHeader'
import NavDropdown from '../header/NavDropdown'
import SidebarMenu from '../sidebar-menu.button'


const Header = () => {
  const [opened, toggleOpened] = useState(false);
  return(
    <header className="sticky top-0 justify-between bg-secondary shadow">
      <div className="absolute flex items-center sm:hidden">
        {/*button menu*/}
        <SidebarMenu
          className="text-primary pt-2 pl-2"
          opened={!opened}
          onClick={() => {
            toggleOpened(!opened)
          }}/>
      </div>

      <BodyHeader/>
      <NavDropdown open={opened}/>
    </header>
  )

}
export default Header;
