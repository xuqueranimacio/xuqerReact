import { Link } from "react-router-dom";

import myImg from "../img/logo/logo-xuquer-animacio-vectors_page-0001.png"
import { useEffect } from "react";

export function AsideList(){

    useEffect(() => {
        const openAside = document.querySelectorAll(".menuBurger");
        const closeAside = document.getElementById("closeAside");
        const asidePanel = document.getElementById("asidePanel");

        openAside.forEach(open => {
            open.addEventListener("click", () => {
                asidePanel.classList.add("activeAside");
            })
        });
        

        closeAside.addEventListener("click", () => {
            asidePanel.classList.remove("activeAside");
        })
    }, [])

    return(
        <aside className="aside-menu" id="asidePanel">

        <div className="xClose" id="closeAside">
            <img src="../img/XCloseDelete.svg" alt="" />
        </div>

        <div className="asideList">
            <Link to="/nosaltres">Nosaltres</Link>
            <Link to="/campaments">Campaments</Link>
            <Link to="/escoles-de-vacances">Escoles de Vacances</Link>
            <Link to="/animacions">Animacions</Link>
            <Link to="/extraescolars">Extraescolars</Link>
            <Link to="/contacte">Contacte</Link>
        </div>

        <div className="absolute-img">
            <Link to="/"><img src={myImg} alt="" /></Link>
        </div>
        
        </aside>
    )
}