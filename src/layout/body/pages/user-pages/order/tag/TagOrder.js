import React, { useRef, useState } from "react";
import styles from "./tagOrder.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCartShopping, faEye, faHeart, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import patchAPI from "../../../../../../server/axios/patchAPI"

import Tippy from '@tippyjs/react/headless'

function TagOrder({ name, price, status, quanlity, id = 1, img }) {

    const [newQuanlity, setNewQuanlity] = useState(quanlity)

    const stars = useRef([1, 1, 1, 1, 1])
    
    const submitQuanlity = () => {
        
    }

    return (
        <div className={styles.container}>
            <img src={img} class="card-img-top" alt="..."></img>
            <div className={styles.info}>
                <div className={styles.starGroup}>{stars.current.map((star, index) => <FontAwesomeIcon key={index} className={styles.icon} icon={faStar} />)}</div>
                <p className={styles.name}>{name}</p>
                <p className={styles.status}>{status ? "Còn hàng" : "Hết hàng"}</p>
                <div className={styles.tools}>
                    <div className={styles.btn}>
                        <button onClick={submitQuanlity} class="btn">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                </div>
                <p className={styles.price}>{price + " đ"}</p>
            </div>
        </div>

    );
}

export default TagOrder;