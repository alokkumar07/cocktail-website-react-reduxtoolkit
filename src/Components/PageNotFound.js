import React from 'react'
import Layout from './Layout'

const PageNotFound = () => {
  const logo =
    "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp";
  return (
    <Layout>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </Layout>
  )
}

export default PageNotFound