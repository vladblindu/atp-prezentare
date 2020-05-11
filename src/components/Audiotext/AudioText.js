import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import flat from 'flat'
import ContainerLeft from '../mix/ContainerLeft'
import Title from '../mix/Title'
import Motivatie from './Motivatie'


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
    <Motivatie/>
  </>

Markup.propTypes = {
  src: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string
}

const AudioText =  () => <Connect><AudioText/></Connect>

export default AudioText