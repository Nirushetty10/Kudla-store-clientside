import classes from "./Category.module.scss";
import SingleCategory from "../Single Category/SingleCategory";
// import useFetch from "../../hooks/useFetch";
// import config  from "../../config.json";

const data = [
    {
        id : 1,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/SBC-Bloom.jpg",
        title : "Staples"
    },
    {
        id : 2,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Temple-New.jpg",
        title : "Snacks & Beverages"
    },{
        id : 3,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Natural-Foods-New.jpg",
        title : "Packaged Food"
    },
    {
        id : 4,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Health-New.jpg",
        title : "Baby Care"
    },
    {
        id : 5,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Clothing-New.jpg",
        title : "Household Care"
    },
    {
        id : 6,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Yoga-Store-New.jpg",
        title : "Dairy & Eggs"
    },
    {
        id : 7,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Home-Decor-New.jpg",
        title : "Home & Kitchen"
    },
    {
        id : 8,
        image : "https://staticin.sadhguru.org/in/pub/media/wysiwyg/homepage/shop-by/Yoga-Store-New.jpg",
        title : "Fruits & Vegitables"
    },
]

const Category = () => {

  return (
    <div className={classes.category_container}>
       <div className={classes.category_sec}>
        <div className={classes.category_title}>
            <h3>Shop By Category</h3>
        </div>
         <div className={classes.category_content}>
           {data.map((item,index) => <SingleCategory item={item} number={index}/>)}
         </div>
       </div>
    </div>
  )
}

export default Category