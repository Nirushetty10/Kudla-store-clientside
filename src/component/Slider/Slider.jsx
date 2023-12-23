import classes from "./Slider.module.scss";
import { useEffect, useState } from "react";
import img1 from "../../Assets/images//samboy-s-s-t-food-products-baikampady-mangalore-food-product-retailers-oeqs0yqj8r.avif";
import img2 from "../../Assets/images/61vEtOfR9XL.jpg";
import img3 from "../../Assets/images/11046171_840918349360908_1223685065086634418_n.jpg";
import img4 from "../../Assets/images/pexels-aleksandar-pasaric-3423860.jpg";
import img5 from "../../Assets/images/pexels-rene-asmussen-3167310.jpg";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setImgIndex(imgIndex < 4 ? imgIndex + 1 : 0);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [imgIndex]);

  const barClickHandler = (e) => {
    if (e.target.id === "first_bar") setImgIndex(0);
    if (e.target.id === "second_bar") setImgIndex(1);
    if (e.target.id === "third_bar") setImgIndex(2);
    if (e.target.id === "fourth_bar") setImgIndex(3);
    if (e.target.id === "fifth_bar") setImgIndex(4);
    if (e.target.id === "sixth_bar") setImgIndex(5);
  };

  return (
    <div className={classes.sliderContainer}>
      <div
        className={classes.sliderImageContainer}
        style={{ transform: `translateX(-${imgIndex}00%)` }}
      >
        {images.map((img) => {
          return (
            <div className={classes.slide}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
      <div className={classes.slider_bar}>
        <div
          className={classes.bar}
          id="first_bar"
          onClick={barClickHandler}
        >
        {imgIndex === 0 && <div className={classes.progress_fill}></div>}
        </div>
        <div
          className={classes.bar}
          id="second_bar"
          onClick={barClickHandler}
        >
        {imgIndex === 1 && <div className={classes.progress_fill}></div>}
        </div>
        <div
          className={classes.bar}
          id="third_bar"
          onClick={barClickHandler}
        >
        {imgIndex === 2 && <div className={classes.progress_fill}></div>}
        </div>
        <div
          className={classes.bar}
          id="fourth_bar"
          onClick={barClickHandler}
        >
        {imgIndex === 3 && <div className={classes.progress_fill}></div>}
        </div>
        <div
          className={classes.bar}
          id="fifth_bar"
          onClick={barClickHandler}
        >
        {imgIndex === 4 && <div className={classes.progress_fill}></div>}          
        </div>
      </div>
    </div>
  );
};

export default Slider;
