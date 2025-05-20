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
            img: "https://tse1.explicit.bing.net/th/id/OIP.FJdT3ZB1xZ0gZWz404U4gwHaEy?rs=1&pid=ImgDetMain",
            status: true,
            price: "23.000"
        }, {
            name: "Khoai lang tím sấy",
            img: "https://i0.wp.com/gocbansi.com/wp-content/uploads/2022/03/IMG_20210824_133838.jpg?fit=1152%2C1152&ssl=1",
            status: true,
            price: "23.000"
        }, {
            name: "Dâu tây sấy",
            img: "https://tse1.mm.bing.net/th/id/OIP.BlZrLI6WtGj9JfT6LjYiuwHaHa?rs=1&pid=ImgDetMain",
            status: true,
            price: "23.000"
        }, {
            name: "Cải bó xôi Ardo 450g",
            img: "https://nongsanbaophuong.com/wp-content/uploads/2020/11/cay-cai-bo-xoi.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Dưa leo",
            img: "https://th.bing.com/th/id/R.4c90d29049946a0b0c344bb5e0b39b67?rik=GnCYXu%2bH9Zageg&pid=ImgRaw&r=0",
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