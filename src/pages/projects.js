import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects/Projects"
import Head from "../components/head"


const projects = () => {
  return (
    <Layout>
      <Head title="Projects"/>
      <Projects></Projects>
    </Layout>
  )
}

export default projects
