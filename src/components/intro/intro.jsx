import { IntroBg } from '../intro-bg/intro-bg';
import { Link } from '../link/link';
import styles from './intro.module.scss'

export function Intro () {
  return (
    <section className={styles.intro}>
      <div className={styles['intro__container']}>
        <div className={styles['intro__text-wrapper']}>
          <h1 className={styles['intro__title']}>Healthy Food Recipes</h1>
          <p className={styles['intro__text']}>Lorem ipsum dolor sit amet, consectetur inquam, illius tabulae, quam</p>
          <Link text='Read more' />
        </div>
      </div>
      <div className={styles['intro__bg-wrapper']}>
        <IntroBg />
      </div>
    </section>
  );
}
