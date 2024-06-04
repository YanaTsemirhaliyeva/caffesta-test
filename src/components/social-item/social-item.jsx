import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import styles from './social-item.module.scss';


export function SocialItem ({item}) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    setSvg(item.img);
  }, [item.img, svg]);

  return (
    <a href="#" className={styles['social-link']} aria-label={`Go to ${item.title.toLowerCase()}`}>
      {parse(svg)}
    </a>
  );
}
