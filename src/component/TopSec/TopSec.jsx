import classes from "./TopSec.module.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TopSec = () => {
  return (
    <div className={classes.container}>
       <div className={classes.nav_top}>
        <div className={classes.left_sec}>
           <PhoneIphoneIcon className={classes.icons}/>
           <div className={classes.partition_bar}></div>
           <WhatsAppIcon className={classes.icons}/>
           <div className={classes.partition_bar}></div>
           <h3 className={classes.mobile_num}>9876543210</h3>
        </div>
        <div className={classes.middle_sec}>
          <h3 className={classes.message_sec}>
          Welcome to <span style={{"color" : "#F8DE22"}}>Kudla Store!.</span> Your one-stop shop for all things fresh and delicious. Explore aisles filled with quality products and start your grocery journey with us today! Happy shopping,
          </h3>
        </div>
        <div className={classes.right_sec}>
          <h3>Sign Up</h3>
          <div className={classes.partition_bar}></div>
          <h3>Login</h3>
        </div>
       </div>
    </div>
  )
}

export default TopSec