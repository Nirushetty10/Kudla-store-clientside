import classes from "./Home.module.scss";
import NavBar from './../component/NavBar/NavBar';
import Slider from "../component/Slider/Slider";
import TopSec from "../component/TopSec/TopSec";
import Category from "../component/Category/Category";
import BestSeller from "../component/Best Seller/BestSeller";
import TopRated from "../component/Top Rated/TopRated";
import AllItems from "../component/All Items/AllItems";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <div className={classes.home_container}>
      <TopSec />
        <NavBar />
        <Slider />
        <Category />
        <BestSeller />
        <TopRated />
        <AllItems />
        <Footer />
    </div>
  )
}

export default Home