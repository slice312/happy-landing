import config from "/config.json" assert {type: "json"};
import {Utils} from "./utils";


config.timerEndDate = (config.timerEndDate)
    ? Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
    : new Date();


export {config};