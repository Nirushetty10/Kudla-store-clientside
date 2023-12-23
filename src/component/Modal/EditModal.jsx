import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import classes from "./EditModal.module.scss";
import  DeleteIcon  from '@mui/icons-material/Delete';
import  axios  from 'axios';

const BackDrop = () => {
  return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
  const [title, setTitle] = useState(props.type === "createProduct" ? "" :props.data.title);
  const [desc, setDesc] = useState(props.type === "createProduct" ? "" :props.data.description);
  const [rating, setRating] = useState(props.type === "createProduct" ? 0 :props.data.rating);
  const [category, setCategory] = useState(props.type === "createProduct" ? "" :props.data.category[0]);
  const [bestSeller, setBestSeller] = useState(props.type === "createProduct" ? false :props.data.isBestSeller);
  const [unitAndPrice, setUnitAndPrice] = useState(props.type === "createProduct" ? [] :props.data.unitAndPrice);
  const [images, setImages] = useState(props.type === "createProduct" ? "" : props.data.image);
  const [selectedImage, setSelectedImage] = useState([]);
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  const descCount = desc.length;

  const handleRating = (value) => {
     if(value < 0 || value > 5) return;
     setRating(value)
  }

  const updatePriceAndUnit = () => {
    if(unitAndPrice.length > 7) return;
    setUnitAndPrice(prv => ([
      ...prv ,
      {
         unit,
         price
      }
    ]))
  }

  const deleteUnitAndPrice = (id) => {
    let filterUnitAndPrice = unitAndPrice.filter((item,index) => index !== id);
    setUnitAndPrice(filterUnitAndPrice);
  }

  const handleUnitChange = (value,index) => {
     let updatedUnitAndPrice = unitAndPrice.map((item,i) => {
        if(i === index) {
          return {
            ...item,
            unit : value
          };
        } else{
          return item
        }
     })
     setUnitAndPrice(updatedUnitAndPrice)
  }
  const handlePriceChange = (value,index) => {
    let updatedUnitAndPrice = unitAndPrice.map((item,i) => {
       if(i === index) {
         return {
           ...item,
           price : value
         };
       } else {
        return item
      }
    })
    setUnitAndPrice(updatedUnitAndPrice)
 }

 const handleImageChange = (e,index) => {
    const file = e.target.files[0];
    if(file) {
       setSelectedImage(prevImages => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file;
        return updatedImages;
       })
    }
 }

 const handleSubmit = async() => {
    // let data = {
    //    title,
    //    description : desc,
    //    rating,
    //    image : selectedImage,
    //    category,
    //    isBestSeller : Boolean(bestSeller),
    //    unitAndPrice 
    // }

    const formData = new FormData();
  formData.append('title', title);
  formData.append('description', desc);
  formData.append('rating', rating);
  formData.append('category', category);
  formData.append('isBestSeller', bestSeller);

  for (let i = 0; i < unitAndPrice.length; i++) {
    const item = unitAndPrice[i];
    formData.append(`unitAndPrice[${i}]`, JSON.stringify(item));
  }

  // Append selected images (assuming they are in an array)
  for (let i = 0; i < selectedImage.length; i++) {
    formData.append(`image[${i}]`, selectedImage[i]);
  }
  
    try {
      if(props.type === "createProduct") {
        const res = await axios.post(`http://localhost:4000/api/product`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          }})
        if (res.status === 200) {
          props.onCloseModal();
      } else {
      const res = await axios.put(`http://localhost:4000/api/product/${props.data._id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }})
      if (res.status === 200) {
        props.onCloseModal();
      }
    }
  }
    } catch (error) {
      console.log(error.message);
    }
 }

  return (
    <div className={classes.modal}>
      <div className={classes.title}>
        <span className={classes.heading}>Title</span>
        <input type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.desc}>
          <span className={classes.heading}>Description</span>
          <textarea type="text" name="" id="" maxLength={600} value={desc} onChange={(e) => setDesc(e.target.value)}
          /></div>
          <div className={classes.countBox}>
             {descCount}/600
          </div>
      </div>
      <div className={classes.rating}>
          <span className={classes.heading}>Rating</span>
          <input type="number" name="" id="" value={rating} onChange={(e) => handleRating(e.target.value)}/>
      </div>
      <div className={classes.category}>
          <span className={classes.heading}>Category</span>
          <select name="" id="" value={category} onChange={(e) =>setCategory(e.target.value)}>
            <option value="Staples">Staples</option>
            <option value="Snacks & Beverages">Snacks & Beverages</option>
            <option value="Packaged Food">Packaged Food</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Household Care">Household Care</option>
            <option value="Dairy & Eggs">Dairy & Eggs</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Fruits & Vegitables">Fruits & Vegitables</option>
          </select>
      </div>
      <div className={classes.bestSeller}>
          <span className={classes.heading}>Is BestSeller</span>
          <select name="" id="" value={bestSeller} onChange={(e) =>setBestSeller(e.target.value)}>
            <option value="true">True</option>
            <option value="false">False</option>
            </select>
      </div>
      <div className={classes.unitAndPrice}>
      <span className={classes.heading}>Unit and price</span>
        <div className={classes.unitAndPriceContainer}>
         <div className={classes.addUnitAndPrice}>
           <input type="text" value={unit} onChange={e => setUnit(e.target.value)}/>
           <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
           <button type="button" onClick={updatePriceAndUnit}>Add</button>
         </div>
         <div className={classes.unitAndPriceDisplay}>
            {unitAndPrice.map((item,index) => {
               return <div className={classes.unitAndPriceBox}>
                  <input type="text" name="" id="" value={item.unit} onChange={(e) => handleUnitChange(e.target.value,index)}/>
                  <input type="number" name="" id="" value={item.price} onChange={(e) => handlePriceChange(e.target.value,index)}/>
                  <DeleteIcon onClick={()=> deleteUnitAndPrice(index)}/>
               </div>
            })}
         </div>
         </div>
      </div>
      <div className={classes.images}>
      <span className={classes.heading}>Images</span>
          <div className={classes.imageSec_container}>
            {[...Array(4)].map((_,index) => {
              const img = images[index];
              return <div className={classes.img_box}>
                 <img src={`http://localhost:4000/${img}`}/>
                <input type="file" name="" id="" onChange={(e) =>handleImageChange(e,index)}/>
              </div>
            })}
          </div>
      </div>
      <div className={classes.buttons}>
        <button type="button" onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={() => props.onCloseModal()}>Cancel</button>
      </div>
    </div>
  );
}

const EditModal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<BackDrop/>, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay data={props.data} onCloseModal={props.onCloseModal} type={props.type}/>, document.getElementById("overlay-root"))}
    </>
  )
}

export default EditModal
