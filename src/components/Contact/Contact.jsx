import React from 'react'
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="contact/emailIcon.png" alt="email icon" />
                <a href="mailto:sannioladayo16@gmail.com">sannioladayo16@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="contact/linkedinIcon.png" alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/jamiu-sanni-460552164">linkedin.com/jamiu-sanni</a>
            </li>
            <li className={styles.link}>
                <img src="contact/githubIcon.png" alt="github icon" />
                <a href="https://www.github.com/EmjayTech">github.com/EmjayTech</a>
            </li>
        </ul>
    </footer>
  )
}
