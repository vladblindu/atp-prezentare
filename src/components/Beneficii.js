import React from 'react'
import Container from './mix/Container'
import Heading from './mix/Heading'
import Card from './Card'
import AppIcon from './AppIcon'


const Beneficii = () =>
  <Container>
    <Heading className='lg:pb-10 sm:pb-4'>Beneficii</Heading>
    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">
            <AppIcon/> Stimuleaza
          </p>
          <p className="mt-4">
            o piață în creștere, prin facilitarea accesului editurilor mai
            mici la servicii de producție de audiobook-uri și alte servicii de text-to-audio.
          </p>
        </Card>
      </div>
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">
            <AppIcon/>Liberalizează
          </p>
          <p className="mt-4">
            piața de srvicii conexe domeniului, dând posibilitatea unei largi categorii
            de prestatori și angajatori de a-și prezenta și/sau contracta serviciil din domeniu.
          </p>
        </Card>
      </div>
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">
            <AppIcon/>Inovează
          </p>
          <p className="mt-4">
            atat accesul la materiale audio cât și procesele tranzacționale de producere a
            acestora prin utilizarea unui mediu aât de dinamic cum este internetul.
          </p>
        </Card>
      </div>
    </div>
    </Container>


export default Beneficii