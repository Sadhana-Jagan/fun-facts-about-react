import {createRoot} from "react-dom/client"
import HeaderComponent from "./components/Header.jsx"
import MainPageComponent from "./components/MainPage.jsx"
import "./index.css"

const root = createRoot(document.getElementById('root'))


root.render(
    <>
    <HeaderComponent/>
    <MainPageComponent/>
    </>
)