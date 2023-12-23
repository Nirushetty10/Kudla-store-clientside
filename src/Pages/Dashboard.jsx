import React, { useState } from 'react';
import classes from "./Dashboard.module.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Product from '../component/AdminProduct/Product';

const Dashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className={classes.dashboard_layout}>
        <div className={classes.left_sec}>
            <div className={classes.logo_box}>
                <h2>KudlaStore.com</h2>
            </div>
            <div className={classes.content_box}>
            <div className={`${classes.dashboard_content} ${ activePage === "dashboard" ? classes.dashboard_active : ''}`} onClick={()=> setActivePage("dashboard")}>
               <DashboardIcon className={classes.icons}/>
               <h3>Dashboard</h3>
            </div>
            <div className={`${classes.dashboard_content} ${ activePage === "products" ? classes.dashboard_active : ''}`} onClick={()=> setActivePage("products")}>
               <Inventory2Icon className={classes.icons}/>
               <h3>Products</h3>
            </div>
            <div className={`${classes.dashboard_content} ${ activePage === "orders" ? classes.dashboard_active : ''}`} onClick={()=> setActivePage("orders")}>
               <ShoppingCartIcon className={classes.icons}/>
               <h3>Orders</h3>
            </div>
            <div className={`${classes.dashboard_content} ${ activePage === "statistics" ? classes.dashboard_active : ''}`} onClick={()=> setActivePage("statistics")}>
               <BarChartIcon className={classes.icons}/>
               <h3>Statistics</h3>
            </div>
            <div className={`${classes.dashboard_content} ${ activePage === "reviews" ? classes.dashboard_active : ''}`} onClick={()=> setActivePage("reviews")}>
               <ReviewsIcon className={classes.icons}/>
               <h3>Reviews</h3>
            </div>
            </div>
        </div>
        <div className={classes.right_sec}>
            {activePage === "products" && <Product />}
        </div>
    </div>
  )
}

export default Dashboard