import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import flat from 'flat'
import ContainerLeft from './mix/ContainerLeft'
import Title from './mix/Title'
import Subtitle from './mix/SubTitle'


const Connect = ({ children }) => {
  const query = graphql`
  query getHeadArticle {
     strapiArticle(shortID: {eq: "HOME"}) {
      title,
      body,
      mainCover {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 323) {
            src
          }
        }
      }
    }
   }`

  const data = useStaticQuery(query)

  return React.cloneElement(
    React.Children.only(children),
    {
      src: flat(data)['strapiArticle.mainCover.childImageSharp.fluid.src'],
      body: flat(data)['strapiArticle.body'],
      title: flat(data)['strapiArticle.title']
    }
  )

}


export const Markup = ({ src, body, title }) =>
  <>
    <ContainerLeft>
      <div className="text-center lg:text-left lg:w-1/2">
        <Title>{title}</Title>
        <p className="text-xl lg:text-2xl mt-6 font-light mr-5 text-justify">
          {body}
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src={src} alt="hero"/>
      </div>
    </ContainerLeft>
    <div className="container px-16 mx-auto">
      <Subtitle>MOTIVAȚIE</Subtitle>
      <p className="text-lg lg:text-xl mt-6 font-light mr-5 text-justify">
        Trăim într-o lume în continuă schimbare, căreia trebuie să-i acceptam provocările și să le transformăm în
        atu-uri. Fiecare dintre noi păstrează, ca pe mici comori, amintirea unor clipe minunate petrecute în compania
        unei cărți bune; dar, prinși în ritmul zilelor noastre, întâlnirea cu cartea devine un lux pe care ni-l permitem
        din ce în ce mai greu. Pe de altă parte, evoluția tehnologiei IT ne deschide orizonturi din ce în ce mai largi:
        astfel,
        pasionații de lectură care au renunțat la fotoliul confortabil de la fereastră pot asculta cărțile preferate la
        volan,
        la jogging, în transportul public, etc. Editurile mari s-au adaptat acestei situații, dezvoltând o secțiune de
        publicații
        digitale care promite să crească constant, până la a deveni componenta principală a bussiness-ului.
      </p>
    </div>
  </>

Markup.propTypes = {
  src: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string
}

const AudioText =  () => <Connect><AudioText/></Connect>

export default AudioText