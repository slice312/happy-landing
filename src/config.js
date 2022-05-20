import config from "/config.json" assert {type: "json"};
import {Utils} from "./app/utils.js";


config.timerEndDate = (config.timerEndDate)
    ? Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
    : new Date();


export {config};