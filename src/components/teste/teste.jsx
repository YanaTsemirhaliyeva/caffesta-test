import { TESTE_OF_FOOD } from '../../mocks';
import { ArticleTitle } from '../article-title/article-title';
import { TesteItem } from '../teste-item/teste-item';
import styles from './teste.module.scss';

export function Teste () {
  return (
    <div className={styles.teste}>
      <div className={styles['teste__title']}>
        <ArticleTitle title='Teste of food' />
      </div>
      {TESTE_OF_FOOD &&
        <ul className={styles['teste__list']}>
          {TESTE_OF_FOOD.map((item, i) => {
            return (
              <li key={i}>
                <TesteItem item={item} />
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
