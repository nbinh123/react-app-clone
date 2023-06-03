import React, { useEffect, useRef, useState } from "react";
import styles from "./bestSeller.module.scss"
import BannerBestSeller from "./banner/BannerBestSeller";
import TagBest from "./list/TagBest";
import TagIntro from "./tag/TagIntro";

function BestSeller() {

    let intro = useRef([
        {
            content: "Nhập trực tiếp từ nông trại",
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/s_discount_img01.jpg?t=1663644160"
        },{
            content: "Rau củ quả nguồn gốc rõ ràng",
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/banner/s_discount_img02.jpg?t=1663644160"
        }
    ])

    let data = useRef([
        {
            name: "Chuối sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Khoai lang tím sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Dâu tây sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Cải bó xôi Ardo 450g",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Dưa leo",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }])

    let [productsList, setProductsList] = useState([1])
    useEffect(() => {
        setProductsList(data.current)
    },[])

    return (
        <div className={styles.container}>
            <BannerBestSeller />
            <div className={styles.productsList}>
                {productsList.map((product, index) =>
                    <TagBest
                        key={index}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        status={product.status}
                    />)}
            </div>
            <div className={styles.introduce}>
                {intro.current.map((tag, index) => 
                    <TagIntro 
                        key={index}
                        content={tag.content}
                        img={tag.img}
                    />)}
            </div>
        </div>
    );
}

export default BestSeller;