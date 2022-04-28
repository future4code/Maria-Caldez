import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants/Urls"

const useRequestData = (estadoInicial, url) => {

    const [data, setData] = useState(estadoInicial)
    const [erro, setErro] = useState('')

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                setErro(err.response.data)
            })
    }, [url])

    return [data,erro]
}

export default useRequestData