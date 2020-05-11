import React from 'react'
import Heading from '../mix/Heading'
import Editor from './Editor'
import Prestator from './Prestator'
import Consumator from './Consumator'


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
    <Editor/>
    <Prestator/>
    <Consumator/>
  </>


export default Utilizatori