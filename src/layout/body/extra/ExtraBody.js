import React, { useEffect, useRef, useState } from "react";
import styles from "./extraBody.module.scss"
import { Link } from "react-router-dom";

import getAPI from "../../../server/axios/getAPI";

function ExtraBody({ id = 1}) {

    const [listProducts, setListProduct] = useState([])

    const type = [
        "cereal","sea-food","frozen-food","sushi","meat","vegatable"
    ]

    useEffect(() => {
        getAPI("/tag-products", "", {}, setListProduct)
    }, [])

    return (
        <div className={styles.ok}>
            <div className={styles.banner}></div>
            <div className={styles.container}>
                {listProducts.map((product, index) => (
                    <Link to={`/products/${type[index]}`} className={styles.extra} key={index}>
                        <img src={product.img}></img>
                        <p>{product.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ExtraBody;