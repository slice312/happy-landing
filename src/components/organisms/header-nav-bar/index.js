import "./styles.css";
import {config} from "/src/config";


export const renderHeaderNavBar = () => {
    const btnBurgerMenu = document.getElementById("burger-menu-btn");
    btnBurgerMenu.onclick = closeMobileNavMenu;

    const btnGetApp = document.getElementById("nav-btn-get-app");
    btnGetApp.onclick = () => window.open(config.appStoreLink, "_blank", "noopener,noreferrer");

    const navLinks = document.querySelectorAll("#header-nav-bar__menu a");
    Array.from(navLinks)
        .forEach(x => x.onclick = closeMobileNavMenu);
};


const closeMobileNavMenu = () => {
    const menu = document.getElementById("header-nav-bar__menu");
    menu.classList.toggle("nav-bar__menu_active");
};