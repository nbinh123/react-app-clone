import React, { useRef, useState } from "react";
import styles from "./tagOrder.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCartShopping, faEye, faHeart, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import patchAPI from "../../../../../../server/axios/patchAPI"

import Tippy from '@tippyjs/react/headless'

function TagOrder({ name, price, status, quanlity, id = 1 }) {

    const [newQuanlity, setNewQuanlity] = useState(quanlity)

    const stars = useRef([1, 1, 1, 1, 1])
    const inc = () => {
        setNewQuanlity(newQuanlity + 1)
    }
    const dec = () => {
        if (newQuanlity > 0) {
            setNewQuanlity(newQuanlity - 1)
        }
    }
    const submitQuanlity = () => {
        patchAPI("/users", id, {
            cart: [
                {
                    name: name,
                    quanlity: newQuanlity,
                    price: price,
                    total: (newQuanlity * price)
                }
            ]
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.starGroup}>{stars.current.map((star, index) => <FontAwesomeIcon key={index} className={styles.icon} icon={faStar} />)}</div>
                <p className={styles.name}>{name}</p>
                <p className={styles.status}>{status ? "Còn hàng" : "Hết hàng"}</p>
                <div className={styles.tools}>
                    <div onClick={dec} className={[styles.minus].join("")}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <input value={newQuanlity} onChange={(e) => setNewQuanlity(Number(e.target.value))}></input>
                    <div onClick={inc} className={[styles.plus].join("")}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className={styles.btn}>
                        <button onClick={submitQuanlity}>
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