import React, { useRef, useState } from "react";
import styles from "./tagProduct.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"

function TagProduct({ name, price, status, img }) {

    const [quanlity, setQuanlity] = useState(0)

    const stars = useRef([1, 1, 1, 1, 1])
    const inc = () => {
        setQuanlity(quanlity + 1)
    }
    const dec = () => {
        if (quanlity > 0) {
            setQuanlity(quanlity - 1)
        }
    }

    const submit = () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={img}></img>
            </div>
            <div className={styles.info}>
                {stars.current.map((star, index) => <FontAwesomeIcon key={index} className={styles.icon} icon={faStar} />)}
                <p className={styles.name}>{name}</p>
                <p className={styles.status}>{status ? "Còn hàng" : "Hết hàng"}</p>
                <div className={styles.tools}>
                    <div onClick={dec} className={[styles.minus].join("")}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <input value={quanlity} onChange={(e) => setQuanlity(Number(e.target.value))}></input>
                    <div onClick={inc} className={[styles.plus].join("")}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className={styles.btn} onClick={submit}>
                        <button>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                </div>
                <p className={styles.price}>{price + " đ"}</p>
            </div>
        </div>
    );
}

export default TagProduct;