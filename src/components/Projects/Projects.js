import React from 'react'
import Project from "./Project"
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../../css/projects.module.css'
import Title from '../Title'

const query = graphql`
{
  allStrapiProject(sort: {order: DESC, fields: latest}) {
    nodes {
      title
      description
      url
      id
      image {
        childImageSharp {
          fluid (maxWidth: 600){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`
//
export const Projects = () => {

    const {allStrapiProject:{nodes:projects}} = useStaticQuery(query)
    return (
        <section className={styles.projects}>
            <Title title="all" subtitle="projects"></Title>
            <div className={styles.center}>
                {projects.map(item => {
                    return <Project key={item.id} {...item}></Project>
                })}
            </div>
        </section>
    )
}

export default Projects