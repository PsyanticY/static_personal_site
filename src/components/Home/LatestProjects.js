import React from 'react'
import Project from "../Projects/Project"
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../css/projects.module.css'
import Title from '../Title'

const query = graphql`
{
  allStrapiProject(sort: {order: DESC, fields: latest}, limit:6) {
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
            <Title title="top" subtitle="projects"></Title>
            <div className={styles.center}>
                {projects.map(item => {
                    return <Project key={item.id} {...item}></Project>
                })}
            </div>
            <Link to="/projects" className="btn-primary">
              all projects
            </Link>
        </section>
    )
}

export default Projects