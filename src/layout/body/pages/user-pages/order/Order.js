import React, { useEffect, useRef, useState } from "react";
import styles from "./order.module.scss"

import User from "../User";
import TagOrder from "./tag/TagOrder";
import getAPI from "../../../../../server/axios/getAPI";
import { Link } from "react-router-dom";

function Order({ id = 1 }) {

    const [cart, setCart] = useState([1])

    const data = useRef([
        {
            "name": "Chuối sấy",
            "img": "https://tse1.explicit.bing.net/th/id/OIP.FJdT3ZB1xZ0gZWz404U4gwHaEy?rs=1&pid=ImgDetMain",
            "status": true,
            "price": "23.000",
            "id": 1
        },
        {
            "name": "Khoai lang tím sấy",
            "img": "https://i0.wp.com/gocbansi.com/wp-content/uploads/2022/03/IMG_20210824_133838.jpg?fit=1152%2C1152&ssl=1",
            "status": true,
            "price": "23.000",
            "id": 2
        },
        {
            "name": "Dâu tây sấy",
            "img": "https://tse1.mm.bing.net/th/id/OIP.BlZrLI6WtGj9JfT6LjYiuwHaHa?rs=1&pid=ImgDetMain",
            "status": true,
            "price": "23.000",
            "id": 3
        },
        {
            "name": "Cải bó xôi Ardo 450g",
            "img": "https://nongsanbaophuong.com/wp-content/uploads/2020/11/cay-cai-bo-xoi.jpg",
            "status": true,
            "price": "23.000",
            "id": 4
        },
        {
            "name": "Dưa leo",
            "img": "https://th.bing.com/th/id/R.4c90d29049946a0b0c344bb5e0b39b67?rik=GnCYXu%2bH9Zageg&pid=ImgRaw&r=0",
            "status": true,
            "price": "23.000",
            "id": 5
        },
        {
            "name": "Bầu",
            "img": "https://tse1.mm.bing.net/th/id/OIP.eKS1t9PaeG0aK2edLNfhlQHaHa?rs=1&pid=ImgDetMain",
            "status": true,
            "price": "23.000",
            "id": 6
        },
        {
            "name": "Khoai lang Nhật tím",
            "img": "https://barona.vn/storage/meo-vat/85/khoai-lang-tim.jpg",
            "status": true,
            "price": "23.000",
            "id": 7
        }])
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
                {data.current.map((prod, index) => <TagOrder
                    name={prod.name}
                    price={prod.price}
                    quanlity={prod.quanlity}
                    status={true}
                    key={index}
                    img={prod.img}
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