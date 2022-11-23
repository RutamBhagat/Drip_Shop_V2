import React from "react"
import { Outlet } from "react-router-dom"


const Shop = () => {
    return (
        <div className="grid px-4 min-h-screen pt-[15vh]">
            <Outlet />
        </div>
    )
}

export default Shop