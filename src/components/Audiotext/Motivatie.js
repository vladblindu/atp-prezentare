import React from 'react'
import Subtitle from '../mix/SubTitle'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import flat from 'flat'


const Connect = ({ children }) => {
  const query = graphql`
      query getArticle {
          strapiArticle(shortID: {eq: "MOTI"}) {
              subTitle,
              body
          }
      }`

  const data = useStaticQuery(query)

  return React.cloneElement(
    React.Children.only(children),
    {
      body: flat(data)['strapiArticle.body'],
      subTitle: flat(data)['strapiArticle.subTitle']
    }
  )

}


export const Markup = ({body, subTitle }) =>

  <div className="container px-16 mx-auto">
    <Subtitle>{subTitle}</Subtitle>
    <p className="text-lg lg:text-xl mt-6 font-light mr-5 text-justify">
      {body}
    </p>
  </div>


Markup.propTypes = {
  body: PropTypes.string,
  subTitle: PropTypes.string
}

const Motivatie =  () => <Connect><Motivatie/></Connect>

export default Motivatie