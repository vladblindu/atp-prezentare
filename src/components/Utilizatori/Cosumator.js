import React from 'react'
import Subtitle from '../mix/SubTitle'
import consumatorImage from '../../assets/img/consumator.png'
import SplitSection from '../SplitSection'

const Consumator = () =>
  <SplitSection
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <Subtitle>
          Consumatorul final
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          de audiobook ce va gasi intreaga ofertă de produse din această categorie, într-o arhivă online, pe care o
          poate accesa de pe orice dispozitiv mobil și în plus, acces la recenzii,
          comentarii și alte informații despre aparițiile viitoare
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={consumatorImage} alt="consumatori"/>}
  />

  export default Consumator