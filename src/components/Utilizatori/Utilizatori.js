import React from 'react'
import Heading from '../mix/Heading'
import Edituri from './Edituri'
import Prestatori from './Prestatori'
import Consumator from './Cosumator'


const Utilizatori = () =>
  <>
    <div className="container mx-auto">
      <div className="container mx-auto text-center">
        <Heading>Cui se adreseaza</Heading>
      </div>
      <p className="text-md lg:text-xl text-light text-center">
        <strong>AUDIOTEXT</strong> are trei categorii principale de utilizatori:
      </p>
    </div>
    <Edituri/>
    <Prestatori/>
    <Consumator/>
  </>


export default Utilizatori