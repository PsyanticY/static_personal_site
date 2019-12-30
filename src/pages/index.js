import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Projects from '../components/Home/LatestProjects'
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <HomeBanner></HomeBanner>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
