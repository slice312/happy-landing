import {config} from "/src/config.js";
import {Utils} from "/src/app/utils";
import "./styles.css";


export const renderPricing = () => {
    const plans = config.plans;

    Utils.setTextToElement("pricing-plan-title1", plans[0].name)
    Utils.setTextToElement("pricing-plan-price1", "$" + plans[0].price)

    Utils.setTextToElement("pricing-plan-title2", plans[1].name)
    Utils.setTextToElement("pricing-plan-price2", "$" + plans[1].price)

    Utils.setTextToElement("pricing-plan-title3", plans[2].name)
    Utils.setTextToElement("pricing-plan-price3", "$" + plans[2].price)
};