import styles from './navigation-left.module.scss';

export function NavigationLeft ({activeIndex}) {
  const disabled = activeIndex === 0;
  const className = disabled ? `${styles['navigation-left']} ${styles['navigation-left--disabled']}` : `swiper-button-prev ${styles['navigation-left']}`;

  return (
    <button
      className={className}
      type='button'
      disabled={disabled}
      aria-label='navigation previous'
    >
      <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 66C14.7702 66 0 51.2298 0 33C0 14.7702 14.7702 0 33 0C51.2298 0 66 14.7702 66 33C66 51.2298 51.2298 66 33 66ZM17.844 35.2621L35.8742 53.2923C37.125 54.5431 39.1476 54.5431 40.3851 53.2923L42.6472 51.0302C43.898 49.7794 43.898 47.7569 42.6472 46.5194L29.1278 33L42.6472 19.4806C43.898 18.2298 43.898 16.2073 42.6472 14.9698L40.3851 12.7077C39.1343 11.4569 37.1117 11.4569 35.8742 12.7077L17.844 30.7379C16.5931 31.9887 16.5931 34.0113 17.844 35.2621Z" fill="#D9D9D9"/>
      </svg>
    </button>
  );
}
