import React, { useEffect } from 'react'
import TopSec from '../component/TopSec/TopSec'
import NavBar from '../component/NavBar/NavBar'
import ProductsDisplay from '../component/ProductsDisplay/ProductsDisplay';
import classes from "./BestSeller.module.scss"
import useFetch from '../hooks/useFetch';
import config  from "../config.json";

const BestSeller = () => {

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product/allbestseller`);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className={classes.container}>
      <TopSec />
      <NavBar />
      <ProductsDisplay data={data}/>
    </div>
  )
}

export default BestSeller