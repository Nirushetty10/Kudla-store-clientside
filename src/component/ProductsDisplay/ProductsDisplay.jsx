import React from 'react'
import ItemCard from '../Item Card/ItemCard'
import classes from "./ProductDisplay.module.scss";

const ProductsDisplay = (props) => {
  return (
    <div className={classes.main_content}>
          {!props.type === "single_product" && <div className={classes.filterSec}>
            <h1>Filter</h1>
          </div>}
          <div className={classes.productsSec}>
          {props.data.map(item => {
             return <ItemCard key={item._id} item={item} />
           })}
          </div>
       </div>
  )
}

export default ProductsDisplay