import classes from "./Category.module.scss";
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import config  from "../config.json";
import NavBar from "../component/NavBar/NavBar";
import ProductsDisplay from "../component/ProductsDisplay/ProductsDisplay";
import TopSec from './../component/TopSec/TopSec';

const Category = () => {
  const category = useParams();

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product//category/${category.title}`);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className={classes.container}>
       <NavBar />
       <h3>{`Category / ${category.title}`}</h3>
       <ProductsDisplay data={data}/>
    </div>
  )
}

export default Category