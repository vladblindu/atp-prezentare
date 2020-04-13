import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logoIcon from '../../assets/img/logo-dark.svg';
import githubLogo from '../../assets/img/github-icon.svg';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-secondary shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div>
          <img src={logoIcon} alt="application logo" width="200"/>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href="https://github.com">
          <Button>
            <div className="flex text-lg">
            <img  src={githubLogo} alt="github logo" width="30" height="30"/>
            <span className="ml-3 hidden lg:block">Documentație</span>
            </div>
          </Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
