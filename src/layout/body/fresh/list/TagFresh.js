import React, { useRef, useState } from "react";
import styles from "./tagFresh.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCartShopping, faEye, faHeart, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"

import Tippy from '@tippyjs/react/headless'
function TagFresh({ name, price, status, img, id = 1}) {

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
    const addFavourite = () => {

    }

    return (
        <Tippy
            placement="left"
            offset={[-135,0]}
            interactive={true}
            render={attr => (
                <div tabIndex="-1" {...attr} className={styles.tool}>
                    <div className={[styles.toolTag, styles.eyes].join(" ")}>
                        <FontAwesomeIcon className={styles.icon} icon={faEye}/>
                    </div>
                    <div className={[styles.toolTag, styles.favourite].join(" ")} onClick={addFavourite}>
                        <FontAwesomeIcon className={styles.icon} icon={faHeart}/>
                    </div>
                    <div className={[styles.toolTag, styles.refresh].join(" ")}>
                        <FontAwesomeIcon className={styles.icon} icon={faArrowsRotate}/>
                    </div>
                </div>
            )}
        >
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
                        <div className={styles.btn}>
                            <button>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                    </div>
                    <p className={styles.price}>{price + " đ"}</p>
                </div>
            </div>
        </Tippy>
    );
}

export default TagFresh;