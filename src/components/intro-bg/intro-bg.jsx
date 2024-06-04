import styles from './intro-bg.module.scss';

export function IntroBg () {
  return (
    <div className={styles['intro-bg']}>
      <picture>
        <source type='image/webp'
          srcSet='img/intro.webp, img/intro@2x.webp 2x'
        />
          <img
            src='img/intro.jpg'
            srcSet='img/intro@2x.jpg 2x'
            width='1990'
            height='771'
            alt='Picture of useful food' />
      </picture>
    </div>
    // <img className={styles['intro-bg']} src='img/intro.jpg' alt='Picture of useful food' />
  );
}
