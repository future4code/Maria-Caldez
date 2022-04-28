import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/coordinator";


const useProtect = () =>{

    const navigate = useNavigate()

    useEffect(()=>{
        const token= localStorage.getItem("token")

        if (token===null){
            alert("Usuario sem Login")
            goToHomePage(navigate)
        }
    })
}

export default useProtect