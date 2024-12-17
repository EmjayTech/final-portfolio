import React from 'react'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jamiu</h1>
        <p className={styles.description}>I'm a Full-Stack Developer with 3 years of experience using React and NodeJS. Reach out if you'd like to learn more!</p>
        <a href="mailto:sannioladayo16@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src="heroImage.png" alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />

  </section>)
}
