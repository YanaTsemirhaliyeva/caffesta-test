import styles from './nav-list.module.scss';
import { NAV_ITEMS } from '../../const';
import { NavItem } from '../nav-item/nav-item';

export function NavList () {
  return (
    <ul className={styles['nav-list']}>
      {NAV_ITEMS.map((item, i) => <NavItem key={i} item={item} />)}
    </ul>
  );
}
