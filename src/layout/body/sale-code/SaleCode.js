import React from "react"
import styles from "./saleCode.module.scss"

function SaleCode() {
    return (  
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.time}>20/9/2023  09:49:24</p>
                    <p className={styles.title}>Nhận 50.000đ mã khuyến mãi</p>
                </div>
                <div className={styles.code}>
                    <p>GANIC21ABS</p>
                </div>
            </div>
        </div>
    );
}

export default SaleCode;