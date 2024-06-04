import { Blog } from '../blog/blog';
import { Link } from '../link/link';
import { Recipes } from '../recipes/recipes';
import { Teste } from '../teste/teste';
import styles from './main-content.module.scss';

export function MainContent () {
  return (
    <section className={styles['main-content']}>
      <ul className={styles['main-content__articles']}>
        <li className={styles['main-content__article-item']}>
          <Teste />
          <div className={styles['main-content__link-wrapper']}>
            <Link text='Read more' />
          </div>
        </li>
        <li className={styles['main-content__article-item']}>
          <div className={styles['main-content__recipes']}>
           <Recipes />
          </div>
          <div className={styles['main-content__link-wrapper']}>
            <Link text='Read more' />
          </div>
        </li>
        <li className={styles['main-content__article-item']}>
          <Blog />
          <div className={styles['main-content__link-wrapper']}>
            <Link text='Read more' />
          </div>
        </li>
      </ul>
    </section>
  );
}
