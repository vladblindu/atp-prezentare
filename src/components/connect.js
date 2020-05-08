import React from 'react'
import flat from 'flat'
import { graphql, useStaticQuery } from 'gatsby'

const Connect = ({ children }) => {
  const query = graphql`
query getImage {
   strapiArticle(shortID: {eq: "HOME"}) {
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
  console.log(flat(data)['strapiArticle.mainCover.childImageSharp.fixed'])
  return React.cloneElement(
    React.Children.only(children),
    { src: flat(data)['strapiArticle.mainCover.childImageSharp.fixed.src'] }
  )
}

export default Connect