import React from 'react'
import Layout from '../components/layout/Layout'
import ContactPage from '../components/Contact'
import Ecosistem from '../components/Ecosistem'
import Utilizatori from '../components/Utilizatori/Utilizatori'
import Beneficii from '../components/Beneficii/Beneficii'
import AudioText from '../components/Audiotext/AudioText'

export default () => (
  <Layout>

    <section className="pt-20 md:pt-40">
      <AudioText/>
    </section>

    <section id="beneficii" className="py-20 lg:pt-48">
      <Beneficii/>
    </section>

    <section id="utilizatori" className="py-20 lg:pt-32">
      <Utilizatori/>
    </section>

    <section id='ecosistem' className="py-20 lg:pt-32">
        <Ecosistem/>
    </section>

    <section id='contact' className="py-20 lg:pt-24">
       <ContactPage/>
    </section>

  </Layout>
);
