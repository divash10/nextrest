import styles from "../styles/Navbar.module.css";
import Image from 'Next/Image';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="32" height="32" alt="" />
        </div>
        <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>9865048807</div>
        </div>
      </div>

      <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Product</li>
            <li className={styles.listItem}>Menu</li>
            <Image  src="/img/logo.jpg" alt="" width="160px" height="69px" />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image  src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>    
      </div>
    
    
      
    </div>
  )
}

export default Navbar