

export const reg = () => {

    const block = document.getElementById("theme-demo-block");
    const btnLightMode = document.getElementById("theme-button-light-mode");
    const lightMode = {
        icon: document.getElementById("theme-button-light-mode-icon"),
        text: document.getElementById("theme-button-light-mode-text")
    };

    const darkMode = {
        icon: document.getElementById("theme-button-dark-mode-icon"),
        text: document.getElementById("theme-button-dark-mode-text")
    };

    btnLightMode.onclick = () => {
        block.classList.add();

        lightMode.icon.classList.toggle("theme-demo__button_selected");
        lightMode.text.classList.toggle("theme-demo__button_selected");

        darkMode.icon.classList.toggle("theme-demo__button_selected");
        darkMode.icon.classList.add("theme-demo__button_light-inactive");

        darkMode.text.classList.toggle("theme-demo__button_selected");
        darkMode.text.classList.add("theme-demo__button_light-inactive");
    };
};

