import { useNavigate } from "react-router-dom";
import classes from "./ItemCard.module.scss";
import config from "../../config.json"

const ItemCard = (props) => {
  const navigate = useNavigate();
  const navigateToSingleProductHandler = () => {
    debugger
     navigate(`/single-product/${props.item._id}`);
  }
  return (
    <div className={classes.card} >
      <div className={classes.rating}>{props.item.rating} *</div>
       <div className={classes.image_sec} onClick={navigateToSingleProductHandler}>
        <img src={`${config.url}/${props.item.image[1]}`} alt="" />
       </div>
       <div className={classes.content_sec}>
        <div className={classes.desc} onClick={navigateToSingleProductHandler}>{props.item.title}</div>
        <div className={classes.qnty}>{props.item.unitAndPrice[0].unit}</div>
        <div className={classes.price}>₹ {props.item.unitAndPrice[0].price}</div>
       </div>
       <button onClick={navigateToSingleProductHandler}>ADD TO CART</button>
    </div>
  )
}

export default ItemCard