import "./styles.css";


const themeBlock = document.getElementById("theme-demo-block");
const otherThemeLabel = document.getElementById("theme-demo-other-theme-name");
const currentThemeLabel = document.getElementById("theme-demo-name");


export const renderThemeDemoBlock = () => {
    const btnLightMode = document.getElementById("theme-demo-button-light-mode");
    btnLightMode.onclick = setLightTheme;

    const btnDarkMode = document.getElementById("theme-demo-button-dark-mode");
    btnDarkMode.onclick = setDarkTheme;
};


const setLightTheme = () => {
    themeBlock.classList.add("theme-demo_light-theme");
    themeBlock.classList.remove("theme-demo_dark-theme");
    otherThemeLabel.textContent = "dark";
    currentThemeLabel.textContent = "Light mode";
};

const setDarkTheme = () => {
    themeBlock.classList.add("theme-demo_dark-theme");
    themeBlock.classList.remove("theme-demo_light-theme");
    otherThemeLabel.textContent = "light";
    currentThemeLabel.textContent = "Dark mode";
};

