import React, { useRef } from "react";
import styles from "./saleProduct.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons"

function SaleProduct({img, name, price, defaultPrice}) {

    const data = useRef([1,1,1,1,1])

    return (  
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={img}></img>
            </div>
            <div className={styles.info}>
                <p className={styles.icon}>{data.current.map((a,index) => <FontAwesomeIcon key={index} icon={faStar} />)}</p>
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>{price}đ</p>
            </div>
        </div>
    );
}

export default SaleProduct;