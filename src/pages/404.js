import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import {HOME_ROUTE} from '../constants'
import {Link} from '@reach/router'

const NotFoundPage = () =>
    <Layout>
        <SEO title="404: Not found"/>
        <section className="m-10">
            <h1 className="text-2xl font-bold mb-4 text-justify">
                ERROR 404
            </h1>
            <p className="mb-8">
                The requested page could not be found. We tried to cover all
                available pages with accessible links in the interface. If you are sure you know
                what you are looking for, please check your spelling.
            </p>
            <Link
                to={HOME_ROUTE}
                className="py-2 px-4 bg-secondary hover:bg-secondary-light text-white rounded">
                Return to main page
            </Link>
        </section>
    </Layout>


export default NotFoundPage
