import React from 'react'
import ueLogo from '../../assets/img/ue.png'
import isLogo from '../../assets/img/instrumente-structurale.png'
import govLogo from '../../assets/img/guvernul-romaniei.png'

const Footer = () => (
  <footer
    className="container mx-auto py-6 px-3 mt-48 mb-8 text-gray-800 border-grey-800"
    style={{ borderTop: '2px solid' }}>
    <div className="text-lg w-full text-center mb-6">
      Acesta aplicatie este un proiect start-up cofinatat din <strong>Fondul Social European </strong>
      prin <strong> Programul Operational Capital Uman 2014-2020 APEL 4.1/4.2.</strong>
    </div>
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Despre noi</h2>
        <p className="mt-5 sm:text-xsm text-justify">
          Societatea comeriala contractantă este:
          <br/>
          <strong>AUDIOBOOK MARKET SRL</strong>
          <br/>
          cu sediul in
          <br/>
          <strong>Mihăilești județul Giurgiu</strong>


        </p>
      </div>
      <div className="flex-1 px-3 text-center">
        <h2 className="text-lg font-semibold">Foruri tutelare</h2>
        <ul className="mt-4 flex leading-loose">
          <li>
            <img src={ueLogo} alt="logo-ue"/>
          </li>
          <li>
            <img src={isLogo} alt="logo-ue"/>
          </li>
          <li>
            <img src={govLogo} alt="logo-ue"/>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3 text-right">
        <h2 className="text-lg font-semibold">Link-uri proiect</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://github.com/vladblindu/atp-prezentare">documentatie</a>
          </li>
          <li>
            <a href="https://www.bitbrother.ro">bitbrother.ro</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
