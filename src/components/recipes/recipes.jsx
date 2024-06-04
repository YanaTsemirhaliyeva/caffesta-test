import { useEffect, useState } from 'react';
import { RECIPES } from '../../mocks';
import { ArticleTitle } from '../article-title/article-title';
import { RecipesItem } from '../recipes-item/recipes-item';
import styles from './recipes.module.scss';

export function Recipes () {
  const [recipes, setRecipes] = useState(RECIPES);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1279 && recipes.length > 6) {
        setRecipes(recipes.slice(0, 6));
      } else {
        setRecipes(RECIPES);
      }
    };

    handleResize(); // Проверяем размер окна при инициализации

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className={styles.recipes}>
      <div className={styles['recipes__title']}>
        <ArticleTitle title='Recipes' />
      </div>
      {recipes &&
        <ul className={styles['recipes__list']}>
          {recipes.map((item) => {
            return (
              <li key={item.id}>
                <RecipesItem img={item.img} />
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
