import {Utils} from "./utils";


/**
 * @typedef Testimonial
 * @property {string} name
 * @property {string} text
 * @property {string} job
 */

/**
 * @typedef Plan
 * @property {string} name
 * @property {number} price
 */

/**
 * @typedef Config
 * @property {Plan[]} plans
 * @property {Testimonial[]} testimonials
 * @property {Date} timerEndDate
 * @property {string} appStoreLink
 */


/**
 * @returns {Promise<Config>}
 */
export const getConfig = async () => {
    const response = await fetch("./config.json");
    const config = await response.json();
    config.timerEndDate = (config.timerEndDate)
        ? Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
        : new Date();

    return config;
};