import {config} from "/src/config";
import {Utils} from "/src/app/utils";
import {Validator} from "./validator";
import "./styles.css";


const renderModal = () => {
    renderPlanButtons();
    setHandlerOnCloseButton();
    setHandlerOnFormSubmit();
};

const renderPlanButtons = () => {
    const plans = config.plans;
    Utils.setTextToElement("plan-radio-button-label1", plans[0].name);
    Utils.setTextToElement("plan-radio-button-label2", plans[1].name);
    Utils.setTextToElement("plan-radio-button-label3", plans[2].name);
};

const setHandlerOnCloseButton = () => {
    const modalOrder = document.getElementById("modal-order");
    const btnClose = document.getElementById("modal-order-close-btn");
    btnClose.onclick = () => {
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
        resetState();
    };
};

const setHandlerOnFormSubmit = () => {
    const form = document.getElementById("modal-order-form");
    form.onsubmit = (e) => {
        e.preventDefault(); // прервать перезагрузку страницы
        Validator.clearErrorsAll();
        setTimeout(Validator.validateAll, 70);
    };
};


const openModal = (selectedPlan = 3) => {
    const modal = document.getElementById("modal-order");
    modal.classList.add("modal-order_open");
    document.body.classList.add("modal-open");

    setPlan(selectedPlan);
};

const setPlan = (selectedPlan) => {
    const form = document.getElementById("modal-order-form");
    const radio = Array.from(form.elements.plan)
        .find(x => x.value === String(selectedPlan));

    if (radio)
        radio.checked = true;
};


const closeModal = () => {
    const modalOrder = document.getElementById("modal-order");
    document.body.classList.remove("modal-open");
    modalOrder.classList.remove("modal-order_open");
    resetState();
}

const resetState = () => {
    const form = document.getElementById("modal-order-form");
    form.reset();
    Validator.clearErrorsAll()
};


export const ModalOrder = {
    renderModal,
    openModal,
    closeModal
}
