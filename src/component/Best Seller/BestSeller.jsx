import { useNavigate } from "react-router-dom";
import ItemCard from "../Item Card/ItemCard";
import classes from "./BestSeller.module.scss";
import useFetch from "../../hooks/useFetch";
import config  from "../../config.json";

// const data = [
//   {
//     id : 1,
//     image : "https://rukminim2.flixcart.com/image/192/192/ktx9si80/washing-powder/c/1/i/plus-extra-power-jasmine-and-rose-tide-original-imag75zk9zfq9jyt.jpeg?q=70",
//     desc : "Tide Plus Double Power Jasmine and Rose Detergent Powder 4 kg",
//     quantity : "4kg",
//     price : 469,
//     rating : 4.6
//   },
//   {
//     id : 2,
//     image : "https://rukminim2.flixcart.com/image/192/192/kuof5ow0/air-freshener/h/p/1/bathroom-fragrance-bar-godrej-aer-original-imag7r3bky8aghyg.jpeg?q=70",
//     desc : "Godrej Aer Power Pocket Assorted Fragrance Blocks  (5 x 10 g)",
//     quantity : "5 x 10g",
//     price : 222,
//     rating : 4.2
//   },
//   {
//     id : 3,
//     image : "https://rukminim2.flixcart.com/image/192/192/xif0q/liquid-detergent/c/1/x/-original-imags56c7x6hyzzq.jpeg?q=70",
//     desc : "Godrej Genteel Top load and Front load Fresh Liquid Detergent",
//     quantity : "1kg",
//     price : 213,
//     rating : 4.4
//   },
//   {
//     id : 4,
//     image : "https://rukminim2.flixcart.com/image/192/192/xif0q/washing-powder/h/9/h/-original-imagnpznejzyrybq.jpeg?q=70",
//     desc : "Ghadi Detergent Powder 3 kg",
//     quantity : "3kg",
//     price : 180,
//     rating : 4.5
//   },
//   {
//     id : 5,
//     image : "https://rukminim2.flixcart.com/image/192/192/l4x2rgw0/washing-bar/u/y/i/-original-imagfpjrng39ummh.jpeg?q=70",
//     desc : "Rin Detergent Bar  (1000 g, Pack of 4)",
//     quantity : "1000 g, Pack of 4",
//     price : 87,
//     rating : 4.4
//   },
//   {
//     id : 6,
//     image : "https://rukminim2.flixcart.com/image/192/192/ktrk13k0/washing-powder/r/v/h/easy-wash-surf-excel-original-imag7fhvbzvxgy5r.jpeg?q=70",
//     desc : "Surf excel Easy Wash Detergent Powder 1.5 kg",
//     quantity : "1.2kg",
//     price : 192,
//     rating : 4.2
//   }
// ]

const BestSeller = () => {
  const navigate = useNavigate();

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product/bestseller`);
  console.log(data);

  const viewBestSellerHandler = () => {
      navigate("/best-seller");
  }
  return (
    <div className={classes.container}>
        <div className={classes.content}>
        <div className={classes.category_title}>
            <h3>Best seller</h3>
            <button className={classes.view_all_button} onClick={viewBestSellerHandler}>VIEW ALL</button>
        </div>
        <div className={classes.category_items}>
           {data.map(item => {
             return <ItemCard key={item.id} item={item}/>
           })}
        </div>
        </div>
    </div>
  ) 
}

export default BestSeller