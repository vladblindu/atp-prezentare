import React from 'react'
import Subtitle from '../mix/SubTitle'
import prestatorImage from '../../assets/img/prestatori.png'
import SplitSection from '../SplitSection'


const Prestatori = () =>
  <SplitSection
    reverseOrder
    primarySlot={
      <div className="lg:pl-32 xl:pl-48">
        <Subtitle>
          Presatori de servicii
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          specifice publicațiilor digitale: studiouri audio sau tehnicieni de sunet
          free-lanceri, actori de voce profesioniști sau amatori, agenți și impresari ce pot să-și prezinte cu
          ajutorul aplicatiei serviciile, să contracteze servicii, să livreze și să fie remunerațți într-un mediu
          securizat.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={prestatorImage} alt="prestatori"/>}
  />

  export default Prestatori