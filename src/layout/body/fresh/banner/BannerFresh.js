import React from "react";
import styles from "./bannerFresh.module.scss"

function BannerFresh() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.fresh}>Thực phẩm sạch</p>
                <p className={styles.new}>Sản phẩm mới</p>
            </div>
            <div className={styles.all}>
                <button className={styles.all}>Xem tất cả</button>
            </div>
        </div>
    );
}

export default BannerFresh;