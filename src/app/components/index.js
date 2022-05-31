import "./atoms/index.css";
import "./molecules/radio-buttons.css";
import "./molecules/check-boxes.css";
import "./organisms/sections/index.css";
import {registerAdCountdownTimer} from "./organisms/ad-countdown-timer";
import {renderAppPreview} from "./organisms/app-preview";
import {registerThemeDemoBlock} from "./organisms/theme-demo";
import {ModalOrder} from "./organisms/modal-order";
import {renderTestimonials} from "./organisms/testimonials";
import {renderPricing} from "./organisms/pricing";


export const registerControls = () => {
    registerAdCountdownTimer();
    renderAppPreview();
    registerThemeDemoBlock();
    renderTestimonials();
    renderPricing();


    ModalOrder.renderModal();
};

/*
TODO:
Добавьте атрибут title в элемент input при наличии атрибута pattern
Если вводимый текст не соответствует атрибуту pattern, значение атрибута title будет отображаться в качестве подсказки.

Плохо:

<input name="security-code" pattern="[0-9]{3}" type="text">
Хорошо:

<input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text
 */