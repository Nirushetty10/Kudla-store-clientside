import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopSec from '../component/TopSec/TopSec';
import NavBar from '../component/NavBar/NavBar';
import classes from "./SingleItem.module.scss";
import ProductsDisplay from '../component/ProductsDisplay/ProductsDisplay';
import useFetch from '../hooks/useFetch';
import config  from "../config.json";
import SimilarProduct from '../component/Similar Product/SimilarProduct';
import AllItems from '../component/All Items/AllItems';

const SingleItem = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shippingCharge, setShippingCharge] = useState(50);
  const [activeId, setActiveId] = useState(0);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState(0);
  const [priceAndUnit, setPriceAndUnit] = useState([]);
  const [itemData, setItemData] = useState([]);
  const { id } = useParams();

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product/find/${id}`);

  useEffect(()=> {
    setItemData(data);
    setImage(data.image);
    setPrice(data.unitAndPrice?.[0]?.price ||  0)
    setPriceAndUnit(data.unitAndPrice)
  },[data])

  const priceUpdateHandler = (id,price) => {
    setActiveId(id);
    setPrice(price);
  }

  const qntyHandler = (type) => {
    if(type === "dec") {
       if(quantity === 1) return;
       setQuantity(prv => prv - 1);
    } else  {
       setQuantity(prv => prv + 1);
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
     if(price*quantity >= 500) {
       setShippingCharge(0);
     } else {
      setShippingCharge(50);
     }
  },[quantity,price,id])


  return (
    <div className={classes.container}>
      <TopSec />
      <NavBar />
      {itemData.length===0 ? <p>loading...</p> :
       <div className={classes.product_sec}>
          <div className={classes.left_sec}>
            <div className={classes.top_img}>
              <img src={`http://localhost:4000/${image[imageIndex]}`} alt="" />
            </div>
            <div className={classes.img_list}>
               {image?.map((img,index) => {
                   return <div key={img} className={classes.image_list_card} style={{ border : (imageIndex === index) ? "1px solid #0350c5" : null}} onClick={() => setImageIndex(index)}>
                     <img src={`http://localhost:4000/${img}`} alt="" />
                   </div>
               })}
            </div>
          </div>
          <div className={classes.middle_sec}>
            <h2>{data.title} {priceAndUnit[activeId].unit}</h2>
            <div className={classes.rating}>
              {data.rating} *
            </div>
            <h5 >{data.description}</h5>
           <div className={classes.price}>₹ {priceAndUnit[activeId].price}</div>
           <div className={classes.unit_container}>
              <h4 className={classes.unit_heading}>Unit</h4>
              <div className={classes.unit_box}>
                  {priceAndUnit.map((item,index) => <div key={item._id} id={item._id} className={index === activeId ? `${classes.active}` : null } onClick={()=> priceUpdateHandler(index,item.price)}>{item.unit}</div>)}
              </div>
           </div>
          </div>
          <div className={classes.right_sec}>
              <div className={classes.add_to_cart_sec}>
                 <h4>Total stock : 14</h4>
                 <div className={classes.quantity_sel}>
                  <button onClick={() => qntyHandler("dec")}>-</button>
                  <div className={classes.qnty}>{quantity}</div>
                  <button onClick={() => qntyHandler("inc")}>+</button>
                 </div>
                 <div className={classes.price_details}>
                   <div className={classes.product_price}>
                       <h4>Price</h4>
                       <h3>₹ {price * quantity}</h3>
                   </div>
                   <div className={classes.shipping_price}>
                       <h4>Shipping</h4>
                       <h3>₹ {shippingCharge}</h3>
                   </div>
                   <div className={classes.shipping_total}>
                       <h4>Total</h4>
                       <h3>₹ {price * quantity + shippingCharge}</h3>
                   </div>
                   {(price*quantity < 300) && <div className={classes.cart_desc}>Add items worth ₹{300 - price*quantity} more to place an order</div>}
                   {(price*quantity >= 300 && price*quantity < 500) && <div className={classes.cart_desc}>Add items worth ₹{500 - price*quantity} more for free delivery</div>}
                 </div>
                 <div className={classes.btn_sec}>
                  <button className={classes.Add_to_cart}>Add to Cart</button>
                  {(price*quantity >= 300) && <button className={classes.buy_now_button}>Buy Now</button>}
                 </div>
              </div>
          </div>

       </div>}
       <div className={classes.heading}>
       <h2>Related Products</h2>
       </div>
       {itemData?.title && <SimilarProduct title={itemData.title}/>}
       <AllItems />
    </div>
  )
}

export default SingleItem;