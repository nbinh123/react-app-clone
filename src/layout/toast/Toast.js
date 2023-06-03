import React, { useEffect, useRef, useState } from "react";
import styles from "./toast.module.scss"
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation, faCircleInfo, faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
function Toast({ type = 'success', message = "Thành công", reShow }) {

    const condition = useRef([
        {
            type: "success",
            icon: faCircleCheck,
        }, {
            type: "error",
            icon: faCircleXmark,
        }, {
            type: "info",
            icon: faCircleInfo,
        }, {
            type: "warning",
            icon: faCircleExclamation,
        }])
    const timerId = useRef()
    const [icon, setIcon] = useState(faCircleCheck)
    const [data, setData] = useState({ type: "success", icon: faCircleCheck })
    const [show, setShow] = useState(true)
    const [none, setNone] = useState(false)

    const getIcon = () => {
        let a = condition.current.filter(prod => prod.type === type)
        setData(a[0])
        setIcon(a[0].icon)
    }
    const handleDeleteToast = () => {
        setNone(true)
        if(timerId){
            clearTimeout(timerId.current)
        }
    }
    useEffect(() => {
        setShow(true)
    }, [reShow])
    useEffect(() => {
        if (show === true) {
            setNone(false)
            timerId.current = setTimeout(() => {
                setShow(false)
                setTimeout(() => {
                    setNone(true)
                }, 1500)
            }, 1500)
        }
    }, [show])
    useEffect(() => {
        getIcon()
    }, [reShow])

    return (
        <div className={clsx(styles.container, {
            [styles.borderSuccess]: type === "success",
            [styles.borderError]: type === "error",
            [styles.borderWarning]: type === "warning",
            [styles.borderInfo]: type === "info",
            [styles.block]: show,
            [styles.unblock]: !show,
            [styles.none]: none
        })} >
            <div className={clsx(styles.icon, {
                [styles.success]: type === "success",
                [styles.error]: type === "error",
                [styles.warning]: type === "warning",
                [styles.info]: type === "info",
            })}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={styles.message}>
                <b>{data.type}</b>
                <br></br>
                <p>{message}</p>
            </div>
            <div className={styles.delete}>
                <FontAwesomeIcon onClick={handleDeleteToast} className={styles.icon} icon={faXmark} />
            </div>
        </div >
    );
}

export default Toast;