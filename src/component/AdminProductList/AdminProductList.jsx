import React, { useEffect, useState } from 'react';
import classes from "./AdminProductList.module.scss"
import useFetch from '../../hooks/useFetch';
import config  from "../../config.json";
import AdminItemCard from '../Admin Item Card/AdminItemCard';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import axios from 'axios';
import DeleteModal from '../Modal/DeleteModal';

const AdminProductList = (props) => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(10)
    const [id,setId] = useState(null)
    const [toggleModal,setToggleModal] = useState(false)
    const {data,error, loading, refetch} = useFetch(`${config.url}/api/product${props.url}`);
    
    useEffect(()=> {
        if(data) {
           let pageCount = Math.ceil((data.length / 10));
           setCount(pageCount);
        }
    },[data])

    useEffect(()=> {
       if(props.refetch) {
        refetchData();
        props.disableRefetch();
       }
    },[props.refetch])
    
    const handleChange = (event, value) => {
       setPage(value);
    }
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    let pageData = data.slice(startIndex, endIndex);

    const onDeleteClick = (id) => {
       setId(id)
        setToggleModal(true)
    }

    const onCancelHandler = () => {
        setToggleModal(false)
    }

    const onDeleteHandler = async() => {
        try {
            await axios.delete(`http://localhost:4000/api/product/${id}`);
            setToggleModal(false)
            refetch(`${config.url}/api/product`);
        } catch (error) {
            console.log(error);
        }
    }

    async function refetchData () {
        refetch(`${config.url}/api/product`);
    }

  return (
    <div className={classes.productList_layout}>
        <DeleteModal handleDelete={onDeleteHandler} handleCancel={onCancelHandler} toggle={toggleModal}/>
        <div className={classes.product_grid}>
           {pageData.map(item => <AdminItemCard key={item._id} data={item} deleteClick={onDeleteClick} fetchData={refetchData}/>)}
        </div>
        <div className={classes.product_pagination}>
            <Stack spacing={5}>
             <Pagination count={count} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>
            </Stack>
        </div>
    </div>
  )
}

export default AdminProductList