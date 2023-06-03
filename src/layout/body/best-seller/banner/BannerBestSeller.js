import React from "react";
import styles from "./bannerBestSeller.module.scss"

function BannerBestSeller() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.fresh}>Thực phẩm sạch</p>
                <p className={styles.new}>Sản phẩm bán chạy</p>
            </div>
            <div className={styles.all}>
                <button>Xem tất cả</button>
            </div>
        </div>
    );
}

export default BannerBestSeller;