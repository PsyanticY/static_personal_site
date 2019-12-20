import React from 'react'
import styles from '../../css/single-project.module.css'
import Image from 'gatsby-image'

const Project = ({title, url, description, image}) => {
    const mainImage = image.childImageSharp.fluid;
    console.log(mainImage);

    return (<article className={styles.project}>
        <div className={styles.imgContainer}>
            <Image
                fluid={mainImage}
                alt={title}
                className={styles.img}>
            </Image>
            <a
                href={url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                >check</a>
        </div>
        <div className={styles.footer}>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </article>)
}

export default Project
