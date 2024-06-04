import { Contacts } from '../contacts/contacts';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';
import styles from './header.module.scss'

export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <div className={styles['header__logo-wrapper']}>
          <Logo />
        </div>
        <div className={styles['header__nav']}>
          <Nav />
        </div>
        <div className={styles['header__contacts']}>
          <Contacts />
        </div>
      </div>
    </header>
  );
}
