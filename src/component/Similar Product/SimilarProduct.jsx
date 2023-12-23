import React from 'react';
import ProductsDisplay from '../ProductsDisplay/ProductsDisplay';
import useFetch from '../../hooks/useFetch';
import config  from "../../config.json";

const SimilarProduct = ({title}) => {
  const {data,error, loading, refetch} = useFetch(`${config.url}/api/product/similar/${title}`);
  return (
    <div>
        <ProductsDisplay data={data}/>
    </div>
  )
}

export default SimilarProduct