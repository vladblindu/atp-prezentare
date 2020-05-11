import React from 'react'
import ContainerLeft from '../mix/ContainerLeft'
import Title from '../mix/Title'
import heroImage from '../../assets/img/hero.png'
import Motivatie from './Motivatie'


const AudioText = () =>
  <>
  <ContainerLeft>
    <div className="text-center lg:text-left lg:w-1/2">
      <Title>AUDIO text PORTAL</Title>
      <p className="text-xl lg:text-2xl mt-6 font-light mr-5 text-justify">
        Un portal destinat tuturor serviciilor și produselor implicate in producția de audiobook, servicii de
        voice-over,
        publicare și consum de materiale audio cu text sursă.
      </p>
    </div>
    <div className="lg:w-1/2">
      <img src={heroImage} alt="hero"/>
    </div>
  </ContainerLeft>
      <Motivatie/>
 </>
export default AudioText