import React from 'react'
import Container from './mix/Container'
import Title from './mix/Title'
import ecosystemImage from '../assets/img/ecosistem.png'

const Ecosistem = () =>
  <Container>
      <Title>
        Ecosistem
      </Title>
      <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
        Platforma va pune la dispoziția editorilor o metodă de realizare a unor producții în colaborare. Astfel, un
        editor poate adăuga o propunere de produs, atașând un eșantion sau un text integral dintr-o lucrare pe care
        dorește să o transforme într-un material digital, dar pentru a cărui realizare nu are puterea financiară sau nu
        dorește să-l finanțeze. Producătorii pot să solicite participarea în colaborare, propunând un preț de execuție
        pentru serviciul specific fiecăruia. Odată validați de către editor, cererea pentru serviciul respectiv se
        închide; producătorul devine co-producător la produs, urmând a primi un cuantum din veniturile provenite din
        vânzarea acestui produs. Acest cuantum se calculează în funcție de cota de participare, dată de prețul stabilit
        pentru serviciul prestat raportat la prețul total de producție, după cum au fost stabilite inițial cu editorul.
        Când toate serviciile sunt acoperite, producătorii demarează execuția acestora. După realizarea produsului
        final, editorul îl va încărca pe fluxul de distribuție/promovare. Acest produs va purta un cod special și, la
        fiecare vânzare a unei unități, platforma va direcționa sume către părți în cuantumurile stabilite.
        Audiotext isi propune să fie mai mult decât o aplicație, își proune să devina un ecosistem care să
        cuprindă toate entitățile implicate în creatia de mmedia audio bazata pe servicii de voce, dar și
        de exemplu a serviciilor de ilustrație de carte de care editurile au nevoie.
      </p>
      <div className=" lg:w-full ">
        <img src={ecosystemImage} className=' lg:w-full lg:h-full ' alt="hero"/>
      </div>
  </Container>

export default Ecosistem