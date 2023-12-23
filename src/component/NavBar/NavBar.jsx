import { useEffect, useState } from "react";
import classes from "./NavBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import { Badge } from "@mui/material";
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const typewriterWords = ["Kori Rotti", "Pappad", "Fish Masala", "Sukka masala"];

  const fetchData = async ()=> {
    try {
      let data = await axios.post(`http://localhost:4000/api/product/searchApi?letter=${searchQuery}`);
      setSearchResult(data.data);
    } catch (error) {
       setSearchResult([{"title":"No result found"}])
    }
     
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex((prevIndex) => (prevIndex + 1) % typewriterWords.length);
    }, 3000);

    if(searchQuery !== "") {
         fetchData();
    } else {
      setSearchResult([]);
    }

    return () => {
      clearInterval(interval);
    };
  },[searchQuery]);

  const handleClickSearchItem = (id) => {
     navigate(`/single-product/${id}`);
     setSearchResult([]);
     setSearchQuery("");
  }

  return (

    <div className={classes.navBar}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>
          <h2 onClick={() => navigate("/")}>KudlaStore.com</h2>
        </div>
        <div className={classes.search_container}>
          <input type="text" value={searchQuery} placeholder={`Search for ${typewriterWords[typewriterIndex]}`} onChange={(e)=> setSearchQuery(e.target.value)}/>
          <button className={classes.search_button}>
            <SearchIcon />
          </button>
        </div>
        <div className={classes.nav_right}>
        <Badge badgeContent={1} color="primary">
           <LocalMallIcon />
           </Badge>
           <Badge badgeContent={1} color="primary">
           <NotificationsIcon />
           </Badge>
           <LoginIcon />
        </div>
      </div>
      <div className={classes.searchResult_box}>
         {(searchResult.length > 0) && searchResult.map(item => {
           return <div key={item._id} className={classes.searchResult_item}>
              <h1 onClick={() => handleClickSearchItem(item._id)}>{item.title.slice(0,60)}</h1>
           </div>
         })}
      </div>
    </div>
  );
};

export default NavBar;
