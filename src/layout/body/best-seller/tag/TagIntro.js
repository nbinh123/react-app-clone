import React from "react";
import styles from "./tagIntro.module.scss"

function TagIntro({ content, img }) {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${img})` }}>
            <div className={styles.content}>
                <p className={styles.title}>
                    thực phẩm sức khỏe
                </p>
                <p className={styles.text}>
                    {content}
                </p>
                <p className={styles.sale}>
                    Giảm giá 50% các loại quả
                </p>
                <div className={styles.btn}>
                    <button>Sản phẩm</button>
                </div>
            </div>
        </div>
    );
}

export default TagIntro;