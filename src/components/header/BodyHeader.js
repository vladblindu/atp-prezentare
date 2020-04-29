import React from "react"
import logoIcon from '../../assets/img/logo-dark.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../Button'
import githubLogo from '../../assets/img/github-icon.svg'



const BodyHeader = () =>
  <div className="container flex-1 flex items-center justify-center sm:items-stretch sm:justify-start sm:flex-row ">

    <div className="flex-shrink-0 items-center text-2xl">
      <div>
        <img src={logoIcon} alt="application logo" className='block lg:hidden' width="100"/>
      </div>
    </div>
    <div className="hidden sm:block sm:ml-6">
      <div className='flex'>
      <AnchorLink className="px-3 py-3 rounded-md leading-5 focus:outline-none hover:bg-orange-400 hover:text-gray-600 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" href="#beneficii">
        Beneficii
      </AnchorLink>
      <AnchorLink className="px-3 py-3 rounded-md leading-5 focus:outline-none hover:bg-orange-400 hover:text-gray-600 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" href="#utilizatori">
        Utilizatori
      </AnchorLink>
      <AnchorLink className="px-3 py-3 rounded-md leading-5 focus:outline-none hover:bg-orange-400 hover:text-gray-600 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" href="#Ecosistem">
        Ecosistem
      </AnchorLink>
      <AnchorLink className="px-3 py-3 rounded-md leading-5 focus:outline-none hover:bg-orange-400 hover:text-gray-600 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" href="#structura">
        Resurse
      </AnchorLink>
      </div>
    </div>

    <div className="hidden md:block justify-end">
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

export default BodyHeader