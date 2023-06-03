import React from "react";
import styles from "./favourite.module.scss"

import User from "../../user-pages/User"

function Favourite() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <User />
            </div>
            <div className={styles.favourite}>
                favourite
            </div>
        </div>
    );
}

export default Favourite;