import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/SplitSection'
import heroImage from '../assets/img/hero.png'
import ecosystemImage from '../assets/img/ecosistem.png'
import editorImage from './../assets/img/editor.png'
import prestatorImage from './../assets/img/prestatori.png'
import consumatorImage from './../assets/img/consumator.png'
import AppIcon from '../components/AppIcon'
import Title from '../components/mix/Title'
import Subtitle from '../components/mix/SubTitle'
import Heading from '../components/mix/Heading'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
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
      </div>
      <div className="container mx-auto px-8">
        <Subtitle>MOTIVAȚIE</Subtitle>
        <p className="text-lg lg:text-xl mt-6 font-light mr-5 text-justify">
          Trăim într-o lume în continuă schimbare, căreia trebuie să-i acceptam provocările și să le transformăm în
          atu-uri. Fiecare dintre noi păstrează, ca pe mici comori, amintirea unor clipe minunate petrecute în compania
          unei
          cărți bune; dar, prinși în ritmul zilelor noastre, întâlnirea cu cartea devine un lux pe care ni-l permitem
          din ce în ce mai
          greu. Pe de altă parte, evoluția tehnologiei IT ne deschide orizonturi din ce în ce mai largi: astfel,
          pasionații de
          lectură care au renunțat la fotoliul confortabil de la fereastră pot asculta cărțile preferate la volan, la
          jogging,
          în transportul public, etc. Editurile mari s-au adaptat acestei situații, dezvoltând o secțiune de publicații
          digitale care promite să
          crească constant, până la a deveni componenta principală a bussiness-ului.
        </p>
      </div>
    </section>
    <section id="beneficii" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <Heading>Beneficii</Heading>
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
      </div>
    </section>
    <section id="utilizatori" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto">
        <div className="container mx-auto text-center">
          <Heading>Cui se adreseaza</Heading>
        </div>
        <p className="text-lg lg:text-xl text-light text-center">
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
    </section>

    <section>
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
    </section>
    <section id='resurse'>
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
    </section>

    <section id='ecosistem' className="py-20 lg:pt-32">
      <div className="container mx-auto text-center justify-center">
        <Subtitle>
          Ecosistem
        </Subtitle>
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
        <div className="pl-48 lg:w-auto">
          <img src={ecosystemImage} alt="hero"/>
        </div>
      </div>

    </section>
  </Layout>
);
