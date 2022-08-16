import React, {ReactNode} from "react";
import {GlobalStyle} from "./style";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer/Footer";

interface IProps {
    children?: ReactNode
}

const Layout = React.memo<IProps>(({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Head>
                <link rel="mask-icon" href="/static/mask-icon.svg" color="#20457C"/>
                <link rel="apple-touch-icon" href="/static/apple-touch-icon.png"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
})

export default Layout