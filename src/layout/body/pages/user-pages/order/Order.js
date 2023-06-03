import React, { useEffect, useState } from "react";
import styles from "./order.module.scss"

import User from "../User";
import TagOrder from "./tag/TagOrder";
import getAPI from "../../../../../server/axios/getAPI";
import { Link } from "react-router-dom";

function Order({ id = 1 }) {

    const [orderData, setOrderData] = useState([])
    const [cart, setCart] = useState([1])

    useEffect(() => {
        getAPI("/users", id, {}, setOrderData)
    }, [])
    useEffect(() => {
        setCart(orderData.cart)
    }, [orderData])

    function NoData() {
        return (
            <div className={styles.error}>
                <p>Bạn chưa có đơn đặt hàng nào<Link to={"/"}>Đặt hàng ngay tại đây</Link></p>
            </div>
        )
    }
    function CartList() {
        return (
            <div className={styles.list}>
                {cart.map((prod, index) => <TagOrder
                    name={prod.name} 
                    price={prod.price}
                    quanlity={prod.quanlity}
                    status={true}
                    key={index}
                />)}
            </div>
        )
    }

    return (
        <div className={styles.container} onClick={console.log(cart)}>
            <div className={styles.user}>
                <User />
            </div>
            <div className={styles.order}>
                <p className={styles.title}>Đơn hàng của bạn</p>
                <div className={styles.listCart}>
                    {(cart !== undefined) ? <CartList /> : <NoData />}
                </div>
            </div>
        </div>
    );
}

export default Order;