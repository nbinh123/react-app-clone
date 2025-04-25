import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.scss"
import Tippy from "@tippyjs/react/headless";

import getAPI from "../../../../server/axios/getAPI";
import axios from "axios";

/////////////////////////////////////// sáng mai dậy code tiếp phần css để show kết quả, img sẽ tính mặc định là ảnh mèo chibi

function Search() {

    function SearchTag({name, img, price}){
        return (
            <div className={styles.searchTag}>
                <div className={styles.img}>
                    <img src={img ? img : "https://haycafe.vn/wp-content/uploads/2022/02/Ngo-Nghinh-anh-meo-cute.jpg"} width={45} height={45}></img>
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                    <p>{price.toFixed(2) + " "}$</p>
                </div>
            </div>
        )
    }

    const [inpValue, setInpValue] = useState("")
    const [searchValue, setSearchValue] = useState([])
    const [timer, setTimer] = useState(null)

    const pickInputValue = (e) => {
        // sử dụng kỹ thuật debounce, tránh việc lặp lại quá nhiều lần
        setInpValue(e.target.value)
    }

    const get = () => {
        axios.get("http://localhost:5000/products/api/find", {
            params: {
                name: inpValue,
                type: "less"
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setSearchValue(response.data)
                console.log(response.data)
                // console.log(response.data)
                return response.data
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (timer) {
            clearTimeout(timer)
        }
        let newTimer = setTimeout(() => {
            get()
        }, 500)
        setTimer(newTimer)
    }, [inpValue])


    return (
        <Tippy
            interactive={true}
            placement="bottom"
            visible={searchValue.length > 0 && inpValue}
            offset={[4,0.2]}
            render={attr => (
                <div className={styles.wrapper} tabIndex="-1" {...attr}>
                    {searchValue.map((product, index) => {
                        return <SearchTag 
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            key={index}
                        />
                    })}
                </div>
            )}
        >
            <input onChange={(e) => pickInputValue(e)} placeholder="Nhập từ khóa tìm kiếm" className={styles.search}></input>
        </Tippy>
    );
}

export default Search;