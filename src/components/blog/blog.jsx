import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard  } from 'swiper/modules';
import { BLOG_LIST } from '../../mocks';
import { BlogItem } from '../blog-item/blog-item';
import './blog-swiper.css';
import styles from './blog.module.scss';
import { ArticleTitle } from '../article-title/article-title';
import { useRef, useState } from 'react';
import { NavigationLeft } from '../navigation-left/navigation-left';
import { NavigationRight } from '../navigation-right/navigation-right';


export function Blog () {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const blogsValue = BLOG_LIST.length;
  const disabledPrevClass = activeIndex === 0 ? `${styles['blog__navigation--disabled']}` : '';
  const disabledNextClass = activeIndex === blogsValue -1 ? `${styles['blog__navigation--disabled']}` : '';



  return (
    <div className={styles.blog}>
      <div className={styles['blog__title']}>
        <ArticleTitle title='Blog' />
      </div>
      <div className={styles['blog__swiper']}>
        <Swiper
          onRealIndexChange={(element) => setActiveIndex(element.realIndex)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          cssMode={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          {BLOG_LIST.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <BlogItem item={item} />
              </SwiperSlide>);
          })}
          <div className={styles['blog__navigation']}>
            <div ref={prevRef} className={disabledPrevClass}>
              <NavigationLeft activeIndex={activeIndex} />
            </div>
            <div ref={nextRef} className={disabledNextClass}>
              <NavigationRight activeIndex={activeIndex} blogsValue={blogsValue} />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
