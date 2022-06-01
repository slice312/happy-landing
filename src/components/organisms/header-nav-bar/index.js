import "./styles.css";


export const renderHeaderNavBar = () => {
    const burgerMenuBtn = document.getElementById("burger-menu-btn");
    const menu = document.getElementById("header-nav-bar__menu");

    burgerMenuBtn.onclick = () => {
        menu.classList.toggle("nav-bar__menu_active");
    };
};