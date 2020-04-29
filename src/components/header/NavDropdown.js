import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll/src'
import Button from '../Button'
import githubLogo from '../../assets/img/github-icon.svg'

const NavDropdown = ({open}) => open
  ? <div className="dropdown-menu absolute sm:hidden bg-white shadow-lg rounded-md " >
    <div className="px-2 pt-2 pb-3">
      <AnchorLink className="mt-1 block px-3 py-2 pr-20 rounded-md text-base font-medium text-primary hover:text-gray-600 hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out" href="#beneficii">
        Beneficii
      </AnchorLink>
      <AnchorLink className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-600 hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out" href="#utilizatori">
        Utilizatori
      </AnchorLink>
      <AnchorLink className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-600 hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out" href="#ecosistem">
        Ecosistem
      </AnchorLink>
      <AnchorLink className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-600 hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out" href="#resurse">
        Resurse
      </AnchorLink>
      <div className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary focus:outline-none transition duration-150 ease-in-out">
        <a href="https://github.com/vladblindu/atp-prezentare">
          <Button>
            <div className="flex text-lg">
              <img  src={githubLogo} alt="github logo" width="23" height="23"/>
              <span className="ml-3 hidden lg:block">Documentație</span>
            </div>
          </Button>
        </a>
      </div>
    </div>
  </div>
  : '';

export default NavDropdown