import {registerControls} from "./controls/index.js";


const app = async () => {
   await registerControls();
};

document.addEventListener("DOMContentLoaded", app);