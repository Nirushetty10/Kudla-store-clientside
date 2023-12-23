import React from 'react';
import classes from "./SingleCategory.module.scss";
import { useNavigate } from 'react-router-dom';

const SingleCategory = (props) => {
    const navigate = useNavigate();
    const {id,image,title} = props.item;

    const viewCategoryPage = () => {
        navigate(`/category/${title}`);
      }

  return ( <div key={id} className={`${classes.Category_card} ${classes["class" + props.number]}`} onClick={viewCategoryPage}>
            <div className={classes.image_sec}>
                <img src={image} alt="" />
            </div>
            <div className={classes.titel_sec} >
               <h3>{title}</h3>
            </div>
        </div>
  )
}

export default SingleCategory