// import necessary utility from rrd
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const [isLogin, setIsLogin] = useState(false)

    return (
        isLogin ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoute