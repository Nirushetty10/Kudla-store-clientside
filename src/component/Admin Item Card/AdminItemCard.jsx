import React, { useState } from 'react';
import classes from "./AdminItemCard.module.scss";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from '../Modal/EditModal';

const AdminItemCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalCancel = () => {
    props.fetchData();
    setIsModalOpen(false);
  }
  
  return (
    <>
    {isModalOpen && <EditModal onCloseModal={onModalCancel} data={props.data}/>}
    <div className={classes.item_box}>
      <div className={classes.img_box}>
      <img src={`http://localhost:4000/${props.data.image[0]}`} alt="" />
      </div>
        <h2 className={classes.title}>{props.data.title.slice(0,60)}</h2>
        <div className={classes.product_priceandunit}>
          <span className={classes.product_price}>{props.data.unitAndPrice[0].price}₹</span>
          <span className={classes.product_unit}>{props.data.unitAndPrice[0].unit}</span>
        </div>
        <div className={classes.edit_delete}>
          <div className={classes.edit}>
              <EditIcon  style={{ fontSize: '16px' }} onClick={() => setIsModalOpen(true)}/>
          </div>
          <div className={classes.delete}>
              <DeleteIcon style={{ fontSize: '16px' }} onClick={()=> props.deleteClick(props.data._id)}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default AdminItemCard