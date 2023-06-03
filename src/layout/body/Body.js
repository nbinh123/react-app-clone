import React from "react"
import styles from "./body.module.scss"

import IntroProduct from "./intro/IntroProducts";
import ExtraBody from "./extra/ExtraBody";
import Healthy from "./healthy/Heathy";
import SaleOnWeek from "./sale-on-week/SaleOnWeek";
import GroupSaleProduct from "./sale-on-week/list/GroupSaleProduct";
import FreshProduct from "./fresh/FreshProduct";
import SaleCode from "./sale-code/SaleCode";
import BestSeller from "./best-seller/BestSeller";
import Login from "./pages/login/Login";
import SignIn from "./pages/sign-in/SignIn";
import Chat from "./pages/chat-real-time/Chat";

import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";

import ShowProduct from "./extra/show-product/ShowProduct";
import Introduce from "./pages/introduce/Introduce";
import Admin from "./pages/admin/Admin";
import Favourite from "./pages/user-pages/favourite/Favourite";
import Info from "./pages/user-pages/info/Info";
import Order from "./pages/user-pages/order/Order"

function Extra() {
    return (
        <>
            <IntroProduct />
            <ExtraBody />
            <Healthy />
            <SaleOnWeek />
            <GroupSaleProduct />
            <FreshProduct />
            <SaleCode />
            <BestSeller />
        </>
    )
}

function Body({toast, socket}) {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Extra />} />
                <Route path="/products" element={<Extra />} />
                <Route path="/products/:type" element={<ShowProduct />} />
                <Route path="/login" element={<Login toast={(type, message) => toast(type, message)} />} />
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/admin" element={<Admin toast={(type, message) => toast(type, message)} />} />
                <Route path="/chat" element={<Chat socket={socket} />} />

                <Route path="/user/manage" element={<RequireAuth children={<Info />} />} />
                <Route path="/user/manage/favourite" element={<RequireAuth children={<Favourite/>} />}/>
                <Route path="/user/manage/order" element={<RequireAuth children={<Order />} />} />
            </Routes>
        </div>
    );
}

export default Body;



function RequireAuth({ children }) {

    const location = useLocation();
    const [change, setChange] = useState(false)

    return !localStorage.getItem("accessToken") ? (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    ) : (
        children
    );
}