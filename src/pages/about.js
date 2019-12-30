import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import {Link} from 'gatsby'
import Head from "../components/head"

const about = () => {
  return (
    <Layout>
      <Head title="About"/>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am PsyanticY, I am a functionall programming enthuthist.</p>
          <p>I also like to deploy my infrastructure in a functional way using
            nix and<a href="https://nixos.org">NixOS</a>.</p>
        </article>
        <div className="btn-container">
        <Link to="/" className="btn-btn1">
          Home Page
        </Link>
      </div>
      </section>


    </Layout>
  )
}

export default about
