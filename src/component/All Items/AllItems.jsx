import { useNavigate } from "react-router-dom";
import ItemCard from "../Item Card/ItemCard";
import classes from "./AllItems.module.scss";
import useFetch from "../../hooks/useFetch";
import config  from "../../config.json";

const AllItems = () => {
  const navigate = useNavigate();

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product/product`);

  const viewAllProductHandler = () => {
      navigate("/all-products");
  }
  return (
    <div className={classes.container}>
        <div className={classes.content}>
        <div className={classes.category_title}>
            <h3>All Items</h3>
            <button className={classes.view_all_button} onClick={viewAllProductHandler}>VIEW ALL</button>
        </div>
        <div className={classes.category_items}>
           {data.map(item => {
             return <ItemCard key={item.id} item={item} />
           })}
        </div>
        </div>
    </div>
  ) 
}

export default AllItems