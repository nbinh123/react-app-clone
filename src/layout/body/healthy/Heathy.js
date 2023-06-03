import React, { useEffect, useRef, useState } from "react";
import styles from "./healthy.module.scss"

function Healthy() {

    const data = useRef([
        {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/discount_img01.jpg?t=1663571918",
            content: "100% từ thiên nhiên"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/discount_img02.jpg?t=1663571918",
            content: "đóng gói hợp vệ sinh"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/discount_img03.jpg?t=1663571918",
            content: "hàm lượng dinh dưỡng cao"
        }
    ])

    const [bannerList, setBannerList] = useState([])
    useEffect(() => {
        setBannerList(data.current)
    }, [])

    return (
        <div className={styles.container}>
            {bannerList.map((banner, index) => (
                <div style={{ backgroundImage: `url(${banner.img})` }} className={styles.banner} key={index}>
                    <div className={styles.info}>
                        <p className={styles.text}>Thực phẩm sức khỏe</p>
                        <p className={styles.content}>{banner.content}</p>
                        <button className={styles.btn}>Sản phẩm</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Healthy;