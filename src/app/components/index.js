import "./atoms/index.css";
import "./molecules/radio-buttons.css";
import "./molecules/check-boxes.css";
import "./organisms/sections/index.css";
import {registerAdCountdownTimer} from "./organisms/ad-countdown-timer";
import {renderAppPreview} from "./organisms/app-preview";
import {registerThemeDemoBlock} from "./organisms/theme-demo";
import {renderPricing} from "./organisms/pricing";
import {renderTestimonials} from "./organisms/testimonials";
import {renderDownload} from "./organisms/download";
import {ModalOrder} from "./templates/modal-order";


export const registerControls = () => {
    registerAdCountdownTimer();
    renderAppPreview();
    registerThemeDemoBlock();
    renderPricing();
    renderTestimonials();
    renderDownload();


    ModalOrder.renderModal();
};