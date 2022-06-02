import "./styles.css";
import {config} from "/src/config";


export const renderHeaderNavBar = () => {
    setOpenCloseMenuHandlers();
    setButtonsHandlers();
};

const setOpenCloseMenuHandlers = () => {
    const btnBurgerMenu = document.getElementById("burger-menu-btn");
    btnBurgerMenu.onclick = toggleMobileNavMenu;

    const navLinks = document.querySelectorAll("#header-nav-bar__menu a");
    Array.from(navLinks)
        .forEach(x => x.onclick = toggleMobileNavMenu);
};

const toggleMobileNavMenu = () => {
    const menu = document.getElementById("header-nav-bar__menu");
    menu.classList.toggle("nav-bar__menu_active");
};

const setButtonsHandlers = () => {
    const btnGetApp = document.getElementById("nav-btn-get-app");
    btnGetApp.onclick = () => window.open(config.appStoreLink, "_blank", "noopener,noreferrer");
};