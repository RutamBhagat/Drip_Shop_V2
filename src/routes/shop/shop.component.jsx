import React from "react"
import { Outlet } from "react-router-dom"
import ZoomComponent from "./Cards/zoom.component"


const Shop = () => {
    return (
        <div className="grid px-4 min-h-screen pt-[15vh]">
            <Outlet />
            <ZoomComponent />
        </div>
    )
}

export default Shop