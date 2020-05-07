import React from 'react'
import Container from './mix/Container'
import Heading from './mix/Heading'
import SplitSection from './SplitSection'
import Subtitle from './mix/SubTitle'
import editorImage from '../assets/img/editor.png'
import prestatorImage from '../assets/img/prestatori.png'
import consumatorImage from '../assets/img/consumator.png'


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
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <Subtitle>Edituri și publicații</Subtitle>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            oferindu-le comunicarea personalizată către consumatorii lor, precum și fidelizarea acestora pe canale
            proprii. Editurilor care încă nu au dezvoltat acest segment - de publicații digitale -
            <strong>AUDIOTEXT</strong> le
            facilitează accesul la o piață liberalizată, unde pot găsi furnizori de servicii la prețuri accesibile.
          </p>
        </div>
      }
      secondarySlot={<img className="w-full" src={editorImage} alt="schema ecosistem"/>}
    />
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
  </>


export default Utilizatori