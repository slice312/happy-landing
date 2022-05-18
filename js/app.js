import {registerControls} from "./controls/index.js";


const app = () => {
    registerControls();
};

document.addEventListener("DOMContentLoaded", app);