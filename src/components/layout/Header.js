import { Link } from "gatsby";
import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './../../css/styles.css'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="sticky top-0 bg-secondary z-2">
      <div className="flex flex-wrap items-center justify-between p-2 mx-auto md:p-2">
        <Link to="/" className='md:pl-12 mx-auto'>
          <h1 className="flex flex-start text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 200 200"
              width="54"
              xmlns="http://www.w3.org/2000/svg">
              <g id="icon-dark">
                <path className="cls-2"
                      d="M107.48,180a9.36,9.36,0,1,1,0-18.71,61.28,61.28,0,0,0,0-122.56,9.36,9.36,0,1,1,0-18.71,80,80,0,0,1,0,160Z"/>
                <path className="cls-2"
                      d="M107.48,146.2a9.36,9.36,0,1,1,0-18.71,27.49,27.49,0,0,0,0-55,9.36,9.36,0,1,1,0-18.71,46.2,46.2,0,1,1,0,92.4Z"/>
                <circle className="cls-2" cx="107.48" cy="100" r="10.1"/>
                <path className="cls-3" d="M78.57,38.72H21.9A9.36,9.36,0,0,1,21.9,20H78.57a9.36,9.36,0,0,1,0,18.71Z"/>
                <path className="cls-3"
                      d="M21.88,72.54a11.36,11.36,0,0,1-1.82-.19,11.6,11.6,0,0,1-1.73-.56A10.57,10.57,0,0,1,16.69,71a11.56,11.56,0,0,1-1.4-1.17,9.32,9.32,0,0,1,0-13.24,9.69,9.69,0,0,1,13.24,0,9.44,9.44,0,0,1,0,13.24A12.14,12.14,0,0,1,27.08,71a8.29,8.29,0,0,1-1.59.84,10.53,10.53,0,0,1-1.78.56A10.8,10.8,0,0,1,21.88,72.54Z"/>
                <path className="cls-3" d="M78.57,72.51H44.41a9.36,9.36,0,0,1,0-18.71H78.57a9.36,9.36,0,0,1,0,18.71Z"/>
                <path className="cls-3" d="M78.57,109.36H21.9a9.36,9.36,0,0,1,0-18.72H78.57a9.36,9.36,0,0,1,0,18.72Z"/>
                <path className="cls-3"
                      d="M78.59,146.18A9.45,9.45,0,0,1,72,143.47,8.74,8.74,0,0,1,70.78,142a8.29,8.29,0,0,1-.84-1.59,10.53,10.53,0,0,1-.56-1.78,10.79,10.79,0,0,1-.19-1.82,9.47,9.47,0,0,1,2.76-6.6,9.74,9.74,0,0,1,13.24,0,9.33,9.33,0,0,1-6.6,16Z"/>
                <path className="cls-3" d="M56.06,146.2H21.9a9.36,9.36,0,0,1,0-18.71H56.06a9.36,9.36,0,1,1,0,18.71Z"/>
                <path className="cls-3" d="M78.57,180H21.9a9.36,9.36,0,0,1,0-18.71H78.57a9.36,9.36,0,0,1,0,18.71Z"/>
              </g>
            </svg>

            <span className="text-2xl font-bold tracking-tight">
                  AUDIO<strong className='text-primary-lighter'>TEXT</strong>
            </span>
          </h1>
        </Link>

        <button className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${ isExpanded ? `block` : `hidden`} md:block md:flex md:items-center w-full md:w-auto pr-10 mx-auto text-2xl`}>
          <AnchorLink className='px-3 py-2 block text-white ' href="#beneficii">Beneficii</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-white ' href="#utilizatori">Utilizatori</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-white ' href="#ecosistem">Ecosistem</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-white ' href="#contact">Contact</AnchorLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;