import styles from './navigation-right.module.scss';

export function NavigationRight ({activeIndex, blogsValue}) {
  const disabled = activeIndex === blogsValue - 1;
  const className = disabled ? `${styles['navigation-right']} ${styles['navigation-right--disabled']}` : `swiper-button-next ${styles['navigation-right']}`;

  return (
    <button
      disabled={disabled}
      className={className}
      type='button'
      aria-label='navigation next'
    >
      <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 0C51.2298 0 66 14.7702 66 33C66 51.2298 51.2298 66 33 66C14.7702 66 0 51.2298 0 33C0 14.7702 14.7702 0 33 0ZM48.1561 30.7379L30.1258 12.7077C28.875 11.4569 26.8524 11.4569 25.6149 12.7077L23.3528 14.9698C22.102 16.2206 22.102 18.2431 23.3528 19.4806L36.8722 33L23.3528 46.5194C22.102 47.7702 22.102 49.7927 23.3528 51.0302L25.6149 53.2923C26.8657 54.5431 28.8883 54.5431 30.1258 53.2923L48.1561 35.2621C49.4069 34.0113 49.4069 31.9887 48.1561 30.7379Z" fill="#FF7F48"/>
      </svg>
    </button>
  );
}
