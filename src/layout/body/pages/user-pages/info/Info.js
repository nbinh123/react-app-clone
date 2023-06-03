import React from "react";
import styles from "./info.module.scss"

import User from "../../user-pages/User"

function Info() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <User />
            </div>
            <div className={styles.info}>
                info
            </div>
        </div>
    );
}

export default Info;