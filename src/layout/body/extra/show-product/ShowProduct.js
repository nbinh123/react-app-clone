import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import styles from "./showProduct.module.scss"

import TagProduct from "./tag/TagProduct";

function Extra() {
    function Menu() {
        return (
            <div className={styles.menu}>
                <p>Danh mục sản phẩm</p>
                <li>Bột, Ngũ cốc</li>
                <li>Rau củ quả</li>
                <li>Hải sản</li>
                <li>Thực phẩm đông lạnh</li>
                <li>Sushi & Shashimi Deli</li>
                <li>Thịt - Cá</li>
            </div>
        );
    }
    function CustomPrice() {
        return (
            <div className={styles.customPrice}>
                <p>Giá sản phẩm</p>
                <input type="range"></input>
            </div>
        );
    }
    function NewProduct({ name, price, img, defaultPrice }) {
        const stars = useRef([1, 1, 1, 1, 1])

        return (
            <div className={styles.extraProduct}>
                <div className={styles.img}>
                    <img src={img}></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.stars}>
                        {stars.current.map((star, index) => <FontAwesomeIcon className={styles.icon} key={index} icon={faStar} />)}
                    </div>
                    <div className={styles.name}>
                        <p>{name}</p>
                    </div>
                    <div className={styles.cost}>
                        <p className={styles.price}>{price}<span className={styles.defaultPrice}>{defaultPrice}</span></p>
                    </div>
                </div>
            </div>
        )
    }


    const data = useRef([
        {
            name: "Chuối sấy",
            price: "50.000đ",
            defaultPrice: "75.000đ",
            img: "https://pgddttieucan.edu.vn/wp-content/uploads/2022/09/BST-38-anh-anime-meo-cute-chibi-moinhat-thang-9.jpg"
        }, {
            name: "Khoai lang sấy",
            price: "50.000đ",
            defaultPrice: "75.000đ",
            img: "https://pgddttieucan.edu.vn/wp-content/uploads/2022/09/BST-38-anh-anime-meo-cute-chibi-moinhat-thang-9.jpg"
        }, {
            name: "Dâu tây sấy",
            price: "50.000đ",
            defaultPrice: "75.000đ",
            img: "https://pgddttieucan.edu.vn/wp-content/uploads/2022/09/BST-38-anh-anime-meo-cute-chibi-moinhat-thang-9.jpg"
        }
    ])
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(data.current)
    }, [])

    return (
        <div className={styles.extra}>
            <Menu />
            <CustomPrice />
            <div className={styles.newProduct}>
                <p>Sản phẩm mới</p>
                {product.map((prod, index) => {
                    return <NewProduct
                        key={index}
                        name={prod.name}
                        img={prod.img}
                        price={prod.price}
                        defaultPrice={prod.defaultPrice}
                    />
                })}
            </div>
        </div>
    )
}
function Main() {
    function Banner() {
        return (
            <div className={styles.mainBanner}>
                <p className={styles.title}>thực phẩm sức khỏe </p>
                <p className={styles.content}>100% từ thiên nhiên</p>
                <p className={styles.sale}>Giảm giá 50% các loại</p>
                <div className={styles.btn}>
                    <button>sản phẩm</button>
                </div>
            </div>
        )
    }
    function Options() {
        return (
            <div className={styles.option}>
                <p>Hiển thị</p>
                <select className={styles.font}>
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                    <option>48</option>
                    <option>60</option>
                </select>
                <p>Sắp xếp</p>
                <select className={styles.edit}>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                </select>
            </div>
        )
    }
    function MainProduct() {

        const data = useRef([
            {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            },
            {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            },
            {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            },
            {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            }, {
                name: "san pham",
                price: 111,
                img: "https://qpet.vn/wp-content/uploads/2023/04/meo-chibi-map.jpeg",
                status: true
            },
        ])
        const [product, setProduct] = useState([])
        useEffect(() => {
            setProduct(data.current)
        }, [])

        return (
            <div className={styles.mainProduct}>
                {product.map((prod, index) => {
                    return <TagProduct
                        name={prod.name}
                        price={prod.price}
                        img={prod.img}
                        status={prod.status}
                    />
                })}
            </div>
        )
    }
    return (
        <div className={styles.main}>
            <Banner />
            <Options />
            <MainProduct/>
        </div>
    )
}

function ShowProduct() {

    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <Extra />
                <Main />
            </div>
        </div>
    );
}

export default ShowProduct;