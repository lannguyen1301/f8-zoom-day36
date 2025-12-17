import clsx from 'clsx';
import styles from './Home.module.scss';
import Section from '../../ui/Section';
import Div from '../../ui/Div';
import Img from '../../ui/Img';

function Home() {
    return (
        <Section className={styles.hero}>
            <Div className={styles.container}>
                <Div className={styles.heroInner}>
                    <Div className={styles.heroMedia}>
                        <Div className={styles.heroImgWrap}>
                            <Img
                                className={styles.heroImg}
                                src="./assets/img/pet-01.png"
                                alt=""
                            />
                            <Img
                                className={clsx(styles.heroDecor, styles.heroDecorLeft)}
                                src="./assets/logo/decor-01.svg" />
                            <Img
                                className={clsx(styles.heroDecor, styles.heroDecorRight)}
                                src="./assets/logo/decor-02.svg" />
                        </Div>
                        <Div className={clsx(styles.heroImgWrap, styles.heroImgWrapSmall)}>
                            <Img className={clsx(styles.heroImg, styles.heroImgSmall)} src='./assets/img/pet-02.png' />
                        </Div>
                        <Div className={styles.heroList}>
                            <Section className={styles.heroListItem}>
                                <Img className={styles.heroListItemThumb} rc="./assets/img/pet-03.png" alt="" />
                                <Div className={heroListItemInfo}>
                                    <Para className={styles.heroListItemTitle}>Pet Health</Para>
                                    <Div className={styles.heroListItemSkeleton}></Div>
                                    <Div className={styles.heroListItemSkeleton} style={{ '--width': '39px' }}></Div>
                                </Div>
                            </Section>
                            <Div className={heroListItemSeparate}></Div>

                            <Section className={styles.heroListItem}>
                                <Img src="./assets/img/pet-04.png" alt="" class="hero-list-item__thumb" />
                                <Div className={heroListItemInfo}>
                                    <Para className={styles.heroListItemTitle}>Pet care</Para>
                                    <Div className={styles.heroListItemSkeleton}></Div>
                                    <Div className={styles.heroListItemSkeleton} style={{ '--width': '39px' }}></Div>
                                </Div>
                            </Section>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Section>
    );
}
export default Home

<section class="hero">
  <div class="container">
    <div class="hero__inner">
      <!-- Hero media -->
      <div class="hero__media">
        <div class="hero__img-wrap">
          <img src="./assets/img/pet-01.png" alt="" class="hero__img">

          <!-- Decorators -->
          <img src="./assets/logo/decor-01.svg" alt="" class="hero__decor hero__decor-left">
          <img src="./assets/logo/decor-02.svg" alt="" class="hero__decor hero__decor-right">
        </div>
        <div class="hero__img-wrap hero__img-wrap-small">
          <img src="./assets/img/pet-02.png" alt="" class="hero__img hero__img-small">
        </div>

        <div class="hero__list">
          <!-- Hero list item 1 -->
          <section class="hero-list-item">
            <img src="./assets/img/pet-03.png" alt="" class="hero-list-item__thumb">
            <div class="hero-list-item__info">
              <p class="hero-list-item__title">Pet Health</p>
              <div class="hero-list-item__skeleton"></div>
              <div class="hero-list-item__skeleton" style="--width: 39px"></div>
            </div>
          </section>
          <div class="hero-list-item__separate"></div>

          <!-- Hero list item 2 -->
          <section class="hero-list-item">
            <img src="./assets/img/pet-04.png" alt="" class="hero-list-item__thumb">
            <div class="hero-list-item__info">
              <p class="hero-list-item__title">Pet care</p>
              <div class="hero-list-item__skeleton"></div>
              <div class="hero-list-item__skeleton" style="--width: 39px"></div>
            </div>
          </section>
        </div>
      </div>

      <!-- Hero content -->
      <section class="hero__content">
        <h1 class="hero__heading">Established &amp; Trusted Pet Care Service</h1>
        <p class="hero__desc">
          Discover a wide variety of Pawsitive services to choose from, including daycare, private walks,
          office duty and spa.
        </p>
        <div class="hero__row">
          <a href="#!" class="btn btn--primary hero__cta-btn">
            Book a Meet
            <span class="btn__icon">
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.48584 1.5L5.98584 4L3.48584 6.5" stroke="#FD5056" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </span>
          </a>
          <a href="#!" class="hero__cta-link">
            Schedule a Call
          </a>
        </div>
      </section>
    </div>
  </div>
</section>