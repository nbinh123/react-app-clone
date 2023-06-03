import React, { useState, useEffect, useRef} from "react";
import styles from "./group.module.scss"

import SaleProduct from "./SaleProduct";

function GroupSaleProduct() {

    const [list, setList] = useState([])

    const data = useRef([
        {
            img: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-cute-meo-12-13-59-56.jpg",
            name: "Bắp ngọt Lambweston",
            price: "165.000"
        }, {
            img: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-cute-meo-12-13-59-56.jpg",
            name: "Dưa chuột ngâm",
            price: "230.000"
        }, {
            img: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-cute-meo-12-13-59-56.jpg",
            name: "Chuối sấy",
            defaultPrice: "39.000",
            price: "36.000"
        }, {
            img: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-cute-meo-12-13-59-56.jpg",
            name: "Táo xay nhuyễn Vitabio",
            price: "35.000"
        }, {
            img: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-cute-meo-12-13-59-56.jpg",
            name: "Khoai lang tím sấy",
            price: "50.000"
        }
    ])

    useEffect(() => {
        setList(data.current)
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.saleProducts}>
                {list.map((product, index) =>
                    <SaleProduct
                        key={index}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    );
}

export default GroupSaleProduct;