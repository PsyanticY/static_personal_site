import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am PsyanticY, I am a functionall programming enthuthist.</p>
          <p>I also like to deploy my infrastructure in a functional way using
            nix and<a href="https://nixos.org">NixOS</a>.</p>
        </article>
      </section>
    </Layout>
  )
}

export default about
