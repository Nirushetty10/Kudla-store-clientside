import classes from "./AllProducts.module.scss";
import NavBar from './../component/NavBar/NavBar';
import TopSec from "../component/TopSec/TopSec";
import ProductsDisplay from "../component/ProductsDisplay/ProductsDisplay";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import config  from "../config.json";

const AllProducts = () => {

  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product`);

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

export default AllProducts