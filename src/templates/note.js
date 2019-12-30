import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import styles from "../css/notes.module.css"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulNotes(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Note = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url

        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <section className={styles.note}>
        <Head title={props.data.contentfulNotes.title}/>
        <div className={styles.noteDiv}>
            <h1>{props.data.contentfulNotes.title}</h1>
            <p>{props.data.contentfulNotes.publishedDate}</p>
        </div>
        <div className={styles.postDiv}>
            {documentToReactComponents(props.data.contentfulNotes.body.json, options)}
        </div>
      </section>
    </Layout>
  )
}

export default Note
