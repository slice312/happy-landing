import {config} from "/src/config";
import {Utils} from "/src/app/utils";
import "./styles.css";


export class ModalOrder {
    #rootControl = document.getElementById("modal-order");

    #form = document.getElementById("modal-order-form");

    #planNum = 1;
    constructor() {
    }

    init() {
        this.#form.onsubmit = (e) => {
            e.preventDefault(); // прервать перезагрузку страницы

            const selectedPlan = Array.from(this.#form.elements.plan)
                .find(x => x.checked)
                ?.value;

            console.log("selected plan", selectedPlan);
            console.log("lol kek");
        }
    }

    open(selectedPlan = 1) {
        document.body.classList.add("modal-open");
        this.#rootControl.classList.add("modal-order_open")

        const radio =  Array.from(this.#form.elements.plan)
            .find(x => x.value === String(selectedPlan));

        if (radio)
            radio.checked = true;
    }
}


export const renderModal = () => {
    renderPlanButtons();


    const modalOrder = document.getElementById("modal-order");
    const btnClose = document.getElementById("modal-order-close-btn");
    btnClose.onclick = () => {
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
    };

    openModal();
};


export const openModal = (selectedPlan = 3) => {
    const modal = document.getElementById("modal-order");
    modal.classList.add("modal-order_open")
    document.body.classList.add("modal-open");

    const form = document.getElementById("modal-order-form");
    const radio =  Array.from(form.elements.plan)
        .find(x => x.value === String(selectedPlan));

    if (radio)
        radio.checked = true;
};

/*
plan-radio-buttons__label_selected
 */

const renderPlanButtons = () => {
    const plans = config.plans;

    Utils.setTextToElement("plan-radio-button-label1", plans[0].name)
    Utils.setTextToElement("plan-radio-button-label2", plans[1].name)
    Utils.setTextToElement("plan-radio-button-label3", plans[2].name)
};


const setRadioButtons = () => {

};
