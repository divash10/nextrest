import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover"/>
        </div>
        <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    OH, YES, WE DID THE SPECIAL ITALIAN PIZZA, WELL BAKED SLICED PIZZA.
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    FIND OUR RESTAURANTS
                </h1>
                <p className={styles.text}>
                    1999 Old Town Road
                    <br /> OldTown, 85022
                    <br /> 10-445821521
                </p>
                <p className={styles.text}>
                    1999 New Town Road
                    <br /> NewTown, 85022
                    <br /> 10-445821521
                </p>
                <p className={styles.text}>
                    1999 Old  Road
                    <br /> Old Road, 85022
                    <br /> 10-445821521
                </p>
                <p className={styles.text}>
                    1999 Old Town Road
                    <br /> NewTown, 85022
                    <br /> 10-445821521
                </p>

            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                    MONDAY UNITL FRIDAY
                    <br /> 9:00 - 22:00
                </p>
                
                <p className={styles.text}>
                    SATURDAY - SUNDAY
                    <br /> 12:00 - 24:00
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer