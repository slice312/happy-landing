import "./styles.css";
import {config} from "/src/config";
import {Utils} from "/src/utils";
import {Validator} from "./validation/validator";


const renderModal = () => {
    renderPlanButtons();
    setHandlerOnCloseButton();
    setHandlerOnFormSubmit();
};

const renderPlanButtons = () => {
    const plans = config.plans;
    //TODO: set plans for value
    Utils.setTextToElement("plan-radio-button-label1", plans[0].name);
    Utils.setTextToElement("plan-radio-button-label2", plans[1].name);
    Utils.setTextToElement("plan-radio-button-label3", plans[2].name);

    document.getElementById("btn-plan-1")
        .setAttribute("value", plans[0].name);

    document.getElementById("btn-plan-2")
        .setAttribute("value", plans[1].name);

    document.getElementById("btn-plan-3")
        .setAttribute("value", plans[2].name);
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


/**
 * @param {number} [selectedPlan]
 */
const openModal = (selectedPlan) => {
    const modal = document.getElementById("modal-order");
    modal.classList.add("modal-order_open");
    document.body.classList.add("modal-open");

    setPlan(selectedPlan);
};

/**
 * @param {number} [selectedPlan]
 */
const setPlan = (selectedPlan) => {
    if (!selectedPlan) {
        setMostExpensiveTariff();
    } else {
        const form = document.getElementById("modal-order-form");
        const plan = config.plans[selectedPlan - 1];
        const radio = Array.from(form.elements.plan)
            .find(x => x.value === plan.name);

        if (radio)
            radio.checked = true;
    }
};

const setMostExpensiveTariff = () => {
    const form = document.getElementById("modal-order-form");
    const sortedByPrice = config.plans
        .slice()
        .sort((x, y) => y.price - x.price);

    const radio = Array.from(form.elements.plan)
        .find(x => x.value === sortedByPrice[0].name);

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
