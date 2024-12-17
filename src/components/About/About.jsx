import React from 'react'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img className={styles.aboutImage} src="aboutImage.png" alt="Pressing laptop"/></div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src="../cursorIcon.png" alt="cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm an experienced frontend developer in building responsive web applications and optimized sites.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src="serverIcon.png" alt="server" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I'm an experienced backend developer in building web applications with NodeJS and optimized database using MongoDB with Passport and Google Authentication</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src="cursorIcon.png" alt="data-icon" />
                <div className={styles.aboutItemText}>
                    <h3>Data Analyst</h3>
                    <p>I'm an experienced data science analyst using Excel, SPSS and GraphPad Prism</p>
                </div>
            </li>
        </ul>
    </section>
  )
}
