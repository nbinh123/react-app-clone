import React, { useContext, useEffect, useRef, useState } from "react"
import styles from "./fresh.module.scss"

import BannerFresh from "./banner/BannerFresh";
import TagFresh from "./list/TagFresh";

import getAPI from "../../../server/axios/getAPI";
import { GlobalContext } from "../../../globalContext/GlobalContext";

function FreshProduct() {

    const [productsList, setProductsList] = useState([])
    const { newAxios } = useContext(GlobalContext) 

    useEffect(() => {
        getAPI("/products", "", {}, setProductsList)
    }, [])

    return (
        <div className={styles.container}>
            <BannerFresh />
            <div className={styles.show}>
                <div className={styles.introduce}>
                    <p className={styles.title}>Thực phẩm sức khỏe</p>
                    <p className={styles.content}>hàm lượng dinh dưỡng cao</p>
                    <p className={styles.sale}>Giảm giá 50%</p>
                    <button className={styles.btn}>sản phẩm</button>
                </div>
                <div className={styles.productsList}>
                    {productsList.map((product, index) =>
                        <TagFresh
                            key={index}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            status={product.status}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default FreshProduct;