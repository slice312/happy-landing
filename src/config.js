import configJson from "/config.json" assert {type: "json"};
import {Utils} from "./utils";


configJson.timerEndDate = (configJson.timerEndDate)
    ? Utils.Date.parseDateWithDefaultFormat(configJson.timerEndDate)
    : new Date();


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
 * @property {Plan[]} plans
 * @property {Testimonial[]} testimonials
 * @property {Date} timerEndDate
 * @property {string} appStoreLink
 */
export const config = Object.freeze(configJson);