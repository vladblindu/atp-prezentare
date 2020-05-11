import React from 'react'
import Subtitle from '../mix/SubTitle'
import editorImage from '../../assets/img/editor.png'
import SplitSection from '../SplitSection'


const Edituri = () =>
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

  export default Edituri