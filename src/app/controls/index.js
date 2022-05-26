import {registerAdCountdownTimer} from "./countdown-timer.js";
import {registerThemeDemoBlock} from "./theme-demo.js";


export const registerControls = () => {
    registerAdCountdownTimer();
    registerThemeDemoBlock();

     const btn = document.getElementById("app-preview-btn-buy-now");
     const modal = document.getElementById("app-preview-btn-buy-now");
};