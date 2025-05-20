import React, { useState, useEffect, useRef} from "react";
import styles from "./group.module.scss"

import SaleProduct from "./SaleProduct";

function GroupSaleProduct() {

    const [list, setList] = useState([])

    const data = useRef([
        {
            img: "https://tse1.mm.bing.net/th/id/OIP.7n0RgtWrxrIOEYDREjLozAHaHa?rs=1&pid=ImgDetMain",
            name: "Bắp ngọt Lambweston",
            price: "165.000"
        }, {
            img: "https://down-vn.img.susercontent.com/file/b93edc0cc270d0bd5a1e2db2c0a07c44",
            name: "Dưa chuột ngâm",
            price: "230.000"
        }, {
            img: "https://file.hstatic.net/200000240163/article/chuoi-say-xuat-khau-1_52347959d0f54afcbf8ab05585ba1a8a_1024x1024.png",
            name: "Chuối sấy",
            defaultPrice: "39.000",
            price: "36.000"
        }, {
            img: "https://quatanghanquoc.vn/wp-content/uploads/2018/12/1-tao-bang-la.jpg",
            name: "Táo xay nhuyễn Vitabio",
            price: "35.000"
        }, {
            img: "https://tse1.mm.bing.net/th/id/OIP.juNPQHYLkwojCkWp1A0o_gHaHa?rs=1&pid=ImgDetMain",
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