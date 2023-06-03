import React from "react";
import styles from "./timer.module.scss"

function Timer({number, type}) {
    return (  
        <div className={styles.container}>
            <p>{number}{type}</p>
        </div>
    );
}

export default Timer;