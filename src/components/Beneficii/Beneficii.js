import React from 'react'
import Container from '../mix/Container'
import Heading from '../mix/Heading'
import Inoveaza from './Inoveaza'
import Libereaza from './Libereaza'
import Stimuleaza from './Stimuleaza'


const Beneficii = () =>
  <Container>
    <Heading className='lg:pb-10 sm:pb-4'>Beneficii</Heading>
    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
      <Stimuleaza/>
      <Libereaza/>
      <Inoveaza/>
    </div>
    </Container>


export default Beneficii