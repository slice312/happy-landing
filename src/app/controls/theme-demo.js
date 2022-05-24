export const registerThemeDemoBlock = () => {
    const themeBlock = document.getElementById("theme-demo-block");
    const btnLightMode = document.getElementById("theme-demo-button-light-mode");
    const btnDarkMode = document.getElementById("theme-demo-button-dark-mode");
    const otherThemeLabel = document.getElementById("theme-demo-other-theme-name");
    const currentThemeLabel = document.getElementById("theme-demo-name");


    btnLightMode.onclick = () => {
        themeBlock.classList.add("theme-demo_light");
        themeBlock.classList.remove("theme-demo_dark");
        otherThemeLabel.textContent = "dark";
        currentThemeLabel.textContent = "Light mode";
    };

    btnDarkMode.onclick = () => {
        themeBlock.classList.add("theme-demo_dark");
        themeBlock.classList.remove("theme-demo_light");
        otherThemeLabel.textContent = "light";
        currentThemeLabel.textContent = "Dark mode";
    };
};

