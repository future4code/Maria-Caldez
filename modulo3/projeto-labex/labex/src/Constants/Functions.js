import { useNavigate } from "react-router-dom";


export const GoToAboutPages = (page) =>{
const navigate= useNavigate (page)
  navigate(page)
}

