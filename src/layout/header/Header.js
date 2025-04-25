import React from "react"
import styles from "./header.module.scss"
import Widget from "./widget/Widget";
import MainHeader from "./main/MainHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (  
        <div className={styles.container}>
            <div className={styles.banner}>
                <p>HỖ TRỢ GIAO HÀNG TRONG VÒNG 24H NỘI THÀNH TP.HCM</p>
            </div>
            <MainHeader/>
            <Widget />
        </div>
    );
}

export default Header;