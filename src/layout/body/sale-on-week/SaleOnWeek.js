import React, { useRef, useState, useEffect } from "react";
import styles from "./saleOnWeek.module.scss"

import Timer from "./timer/Timer";

function SaleOnWeek() {
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <p className={styles.sale1}>Sản phẩm ưu đãi <span className={styles.highlight}>trong tuần</span></p>
                    <p className={styles.more}>A virtual assistant collects the products from your list</p>
                </div>
            </div>
            <div className={styles.timer}>
                <Timer number={0} type={"d"} />
                <Timer number={0} type={"h"} />
                <Timer number={0} type={"m"} />
                <Timer number={0} type={"s"} />
            </div>
        </div>
    );
}

export default SaleOnWeek;