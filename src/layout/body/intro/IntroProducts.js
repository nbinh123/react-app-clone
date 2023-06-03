import React from "react";
import styles from "./intro.module.scss"

function IntroProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.theBiggest}></div>
            </div>
            <div className={styles.main2}>
                <div className={styles.extra}>
                    <img src="https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/slider_banner02.jpg?t=1663560316"></img>
                </div>
                <div className={styles.extra}>
                    <img src="https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/slider_banner01.jpg?t=1663560316"></img>
                </div>
            </div>
            <div className={styles.main3}>
                <div className={styles.extra}>
                    <img src="https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/slider_banner03.jpg?t=1663560316"></img>
                </div>
            </div>
        </div>
    );
}

export default IntroProduct;