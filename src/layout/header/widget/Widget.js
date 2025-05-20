import React, { useContext, useEffect, useState } from "react";
import styles from "./widget.module.scss"
import { faCartShopping, faMagnifyingGlass, faPhone, faUser, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"
import Search from "./search/Search";

import Tippy from '@tippyjs/react/headless'
import { GlobalContext } from "../../../globalContext/GlobalContext";

function Widget() {

    const { userID } = useContext(GlobalContext)

    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <a className={styles.logo}></a>
            <div className={styles.tools}>
                <div className={styles.fix}>
                    <div className={styles.category}>
                        <p>Danh mục sản phẩm</p>
                    </div>
                    <Search/>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <div className={styles.help}>
                <div className={styles.hotline}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className={styles.info}>
                        <p>Hỗ trợ khách hàng</p>
                        <p>1900 9477</p>
                    </div>
                </div>
                <Tippy
                    placement="bottom"
                    offset={[-17, 0]}
                    interactive={true}
                    render={attr => (
                        <div>
                            {!localStorage.getItem("accessToken")
                                ? (
                                    <div tabIndex="-1" {...attr} className={styles.wrapper}>
                                        <Link to={"/login"} className={[styles.tool, styles.login].join("")}>
                                            <p>Đăng nhập</p>
                                        </Link>
                                        <Link to={"/sign-in"} className={[styles.tool, styles.signin].join("")}>
                                            <p>Đăng kí</p>
                                        </Link>
                                        <Link to={"/favourite"} className={[styles.tool, styles.favourites].join("")}>
                                            <p>Yêu thích</p>
                                        </Link>
                                    </div>)
                                : (
                                    <div tabIndex="-1" {...attr} className={styles.wrapper}>
                                        <Link to={"/user/manage"} className={[styles.tool, styles.login].join("")}>
                                            <p>Quản lí tài khoản</p>
                                        </Link>
                                        <Link to={"/user/manage/favourite"} className={[styles.tool, styles.login].join("")}>
                                            <p>Yêu thích</p>
                                        </Link>
                                        <Link to={"/"} className={[styles.tool, styles.login].join("")} onClick={logout}>
                                            <p>Đăng xuất</p>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    )}
                >
                    <div className={styles.user}>
                        <FontAwesomeIcon className={styles.icon} icon={faUser} />
                    </div>
                </Tippy>
                <div className={styles.cart}>
                    <Link to={"/user/manage/order"}>
                        <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Widget;