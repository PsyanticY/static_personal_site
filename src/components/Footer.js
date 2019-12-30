import React from "react"
import logo from "../images/PsyanticY.svg"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
import { useStaticQuery, graphql} from 'gatsby'
const Footer = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            sourceRepo
          }
        }
      }
    `
  )
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="PsyanticY logo"></img>
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} PsyanticY. Source
        from
        <a href={data.site.siteMetadata.sourceRepo} className={styles.link}>
          Here
        </a>
      </div>
    </footer>
  )
}

export default Footer
