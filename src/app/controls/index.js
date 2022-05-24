import {registerAdCountdownTimer} from "./countdown-timer.js";
import {registerThemeDemoBlock} from "./theme-demo.js";


export const registerControls = () => {
    registerAdCountdownTimer();
    registerThemeDemoBlock();
};