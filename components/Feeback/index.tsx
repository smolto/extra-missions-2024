import styles from './styles.module.css';

export const Feedback = ({isDesktop = false}) => (
  <div className={!isDesktop ? styles["feedback--mobile"] : styles["feedback--desktop"]}>
    <div>
      <img src="/assets/items/love-letter.png"/>
      <a href="https://padlet.com/irenebermudezz99/did-you-like-this-unit-epvpffzdmfb8l031 ">Did you like this unit?</a>
    </div>
  </div>
)