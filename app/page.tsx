import en from '@/app/locales/en.json';

import styles from '@/app/styles/home.module.css';

export default function Home() {
  return (
    <main className={styles['welcome-content']}>
      <span className={styles['subtitle']}>{en.home.subtitle}</span>
      <span className={styles['title']}>{en.home.title}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
      <p> Natus, eum odit numquam voluptas iure, voluptatem, quaerat porro fuga earum voluptates in dolorum animi laudantium recusandae? Non, id totam?</p>
    </main>
  );
}
