import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants/Urls"

const useRequestData = (url, intialState) => {

    const [data, setData] = useState(intialState)

    const getData = () => {
        axios
        .get(url) 
        .then((response) => 
            setData(response.data)
        )
        .catch((err) => {
            console.log(err.response.data)
        })
    }
        
    useEffect(()=>{
        getData()
    }, [url])

    return [data, getData]
}

export default useRequestData