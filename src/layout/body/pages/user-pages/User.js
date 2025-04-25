import React, { useContext, useEffect, useState } from "react";
import styles from "./user.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEye, faHeart, faPenToSquare, faKey } from "@fortawesome/free-solid-svg-icons"

import getAPI from "../../../../server/axios/getAPI";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../../globalContext/GlobalContext";


function User({ name, img, id = 1 }) {

    const [dataUser, setDataUser] = useState({})
    const { newAxios } = useContext(GlobalContext);
    useEffect(() => {
        const call = async () => {
            const userID = await localStorage.getItem("accessToken")
            if (userID != null) {
                const response = await newAxios.get(5000, `/user/get_information/${userID}`, null, {
                    userID: userID
                })
                setDataUser(response)
            }

        }
        call()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.img}>
                    <img src={dataUser?.img} alt=""></img>
                </div>
                <div className={styles.all}>
                    <p className={styles.name}>{dataUser?.name}</p>
                    <p className={styles.editAccount}>Chỉnh sửa tài khoản</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <p className={styles.title}> Quản lý giao dịch</p>
                <Link to={"/user/manage/order"} className={styles.tag}>
                    <p><FontAwesomeIcon className={styles.icon} icon={faFile} /> Đơn hàng của bạn</p>
                </Link>
                <div className={styles.tag}>
                    <p><FontAwesomeIcon className={styles.icon} icon={faEye} />Sản phẩm đã xem</p>
                </div>
                <Link to={"/user/manage/favourite"} className={styles.tag}>
                    <p><FontAwesomeIcon className={styles.icon} icon={faHeart} />Sản phẩm yêu thích</p>
                </Link>
            </div>
            <div className={styles.account}>
                <p className={styles.title}>Quản lý tài khoản</p>
                <div className={styles.tag}>
                    <p><FontAwesomeIcon icon={faPenToSquare} /> Thông tin tài khoản</p>
                </div>
                <div className={styles.tag}>
                    <p><FontAwesomeIcon icon={faKey} /> Đổi mật khẩu</p>
                </div>
            </div>
        </div>
    );
}

export default User;