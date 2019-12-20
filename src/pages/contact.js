import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contact"></Title>
        <article className={styles.text}>
          <p>
            Hey, if you need anything from me please send me an email at {" "}
            <a href="#">iuns@outlook.fr</a>.
          </p>
          <p>
            You can also have a look at <a href="https://github.com/PsyanticY">my github</a>.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default contact
