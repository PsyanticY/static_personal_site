import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/notes.module.css"
import { Link, graphql, useStaticQuery } from 'gatsby'

const Notes = () => {

  const data = useStaticQuery(graphql`
    query {
        allContentfulNotes ( sort: { fields: publishedDate, order: DESC } ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
        }
    }
 `)

  return (
    <Layout >
      <section className={styles.notes}>
        <Title title="notes"></Title>
        <ol className={styles.olist}>
            {data.allContentfulNotes.edges.map((edge) => {
                return (
                    <li className={styles.post}>
                        <Link to={`/notes/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
      </section>
</Layout>
  )
}

export default Notes