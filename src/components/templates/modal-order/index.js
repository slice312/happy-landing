import {config} from "/src/config";
import {Utils} from "/src/utils";
import {Validator} from "./validation/validator";
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

        // таймаут для анимации мигания перед валидацией
        setTimeout(() => {
            const isValid = Validator.validateAll();
            if (isValid) {
                setActivityIndicator(true);
                postFormData(form);
            }
        }, 70);
    };
};


const postFormData = (form) => {
    const submitButton = document.getElementById("modal-order-submit-button");
    submitButton.disabled = true;

    const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        plan: form.elements.plan.value,
        infoSources: Array.from(form.elements.srcInfo)
            .filter(x => x.checked)
            .map(x => x.value)
    };

    setTimeout(() => {
        console.log("Posted Form Data", formData);
        submitButton.disabled = false;
        closeModal();
    }, 2000);
};


const setActivityIndicator = (isVisible) => {
    const activityIndicator = document.getElementById("modal-order-activity-indicator");
    activityIndicator.style.visibility = isVisible ? "visible" : "hidden";
}


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
    setActivityIndicator(false);
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
