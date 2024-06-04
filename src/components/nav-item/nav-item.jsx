import { useState, useEffect } from 'react';
import styles from './nav-item.module.scss';
import parse from 'html-react-parser';

export function NavItem ({item}) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    setSvg(item.img);
  }, [item.img, svg]);

  return (
    <li className={styles['nav-item']}>
      <a href='#' className={styles['nav-item__link']} aria-label={`Go to ${item.title.toLowerCase()}`}>
        {parse(svg)}
        <p className={styles['nav-item__title']}>
          {item.title}
        </p>
      </a>
    </li>
  );
}
