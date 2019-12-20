import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Projects from '../components/Home/LatestProjects'
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
