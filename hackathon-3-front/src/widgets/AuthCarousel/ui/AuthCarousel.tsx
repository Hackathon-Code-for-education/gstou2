import { Carousel } from "antd";

import firstImg from "@/shared/assets/images/AuthSlider1.png";
import secondImg from "@/shared/assets/images/AuthSlider2.png";
import thirdImg from "@/shared/assets/images/AuthSlider3.png";
import logo from "@/shared/assets/images/logo itself.svg";

import styles from "./authCarousel.module.scss";

export const AuthCarousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.logo}>
        {/* <img src={logo} alt="DOGMA" /> */}
        <h1></h1>
        <span></span>
      </div>
      <Carousel>
        <img src={'https://thumb.tildacdn.com/7f63c963-8007-4319-a9af-9b5af827067d/-/resize/744x/-/format/webp/8b6295f7a9ad42cd8266f22b9410844b.png'} alt="" />
        <img src={'https://www.studylab.ru/upload/Articles/image/big/86946b2e115270a117a1a9e8f73cca3e.jpeg'} alt="" />
        <img src={'https://ed-world.kz/images/city/6.jpg'} alt="" />
      </Carousel>
    </div>
  );
};
