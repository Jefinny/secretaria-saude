import React from "react";

import "../styles/layout.css"

export default function layout({children}){
    return(
        <div className="layout">
            <Header />
            <Banner />
            <Breadcrumbs />

            <div className="Layout-body">
                <Sidebar />
                <main className="layout-content1">{children}</main>
            </div>

            <Footer />
        </div>
    );
}