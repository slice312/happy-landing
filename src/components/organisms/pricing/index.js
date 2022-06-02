import "./styles.css";
import {config} from "/src/config.js";
import {Utils} from "/src/utils";
import {ModalOrder} from "/src/components/templates/modal-order";


export const renderPricing = () => {
    const plans = config.plans;

    Utils.setTextToElement("pricing-plan-title1", plans[0].name);
    Utils.setTextToElement("pricing-plan-price1", "$" + plans[0].price);

    Utils.setTextToElement("pricing-plan-title2", plans[1].name);
    Utils.setTextToElement("pricing-plan-price2", "$" + plans[1].price);

    Utils.setTextToElement("pricing-plan-title3", plans[2].name);
    Utils.setTextToElement("pricing-plan-price3", "$" + plans[2].price);


    document.getElementById("pricing-btn-plan1")
        .onclick = () => ModalOrder.openModal(1);

    document.getElementById("pricing-btn-plan2")
        .onclick = () => ModalOrder.openModal(2);

    document.getElementById("pricing-btn-plan3")
        .onclick = () => ModalOrder.openModal(3);
};

