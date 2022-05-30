import "./atoms/index.css";
import "./organisms/sections/index.css";
import {registerAdCountdownTimer} from "./organisms/ad-countdown-timer";
import {registerThemeDemoBlock} from "./organisms/theme-demo";
import {ModalOrder} from "./organisms/modal-order";
import {renderTestimonials} from "./organisms/testimonials";


export const registerControls = () => {
    registerAdCountdownTimer();
    registerThemeDemoBlock();
    renderTestimonials();



    const btn = document.getElementById("app-preview-btn-buy-now");
    const modalOrder = document.getElementById("modal-order");
    btn.onclick = () => {
        document.body.classList.add("modal-open");
        modalOrder.classList.add("modal-order_open");
    };

    const btnClose = document.getElementById("modal-order-close-btn");
    btnClose.onclick = () => {
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
    };

    const btn3 = document.getElementById("pricing-btn-plan3");
    const modal = new ModalOrder();
    modal.init();

    btn3.onclick = () => {
        modal.open(3);
    };

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