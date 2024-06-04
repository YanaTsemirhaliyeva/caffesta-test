import styles from './nav.module.scss';
import { NAV_ITEMS } from '../../const';
import { NavList } from '../nav-list/nav-list';

export function Nav () {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS &&
        <NavList />
      }
    </nav>
  );
}
