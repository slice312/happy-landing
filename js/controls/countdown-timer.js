import {Utils} from "/js/utils.js";
import {getConfig} from "/js/config.js";


const padWithZero = Utils.String.padWithZero;


const setCountdownTimer = async () => {
    const daysElem = document.getElementById("timer-days");
    const hoursElem = document.getElementById("timer-hours");
    const minutesElem = document.getElementById("timer-minutes");
    const secondsElem = document.getElementById("timer-seconds");

    const timerEndDate = await getTimerEndDate();

    const handler = setInterval(() => {
        const now = new Date();
        const timeSpan = timerEndDate - now;

        if (timeSpan <= 0) {
            const adTimeBlock = document.getElementById("ad-countdown-timer");
            adTimeBlock.remove();
            clearInterval(handler);
            return;
        }

        const dateTimeParts = getDateTimeParts(timeSpan);

        daysElem.innerHTML = padWithZero(dateTimeParts.days, 2);
        hoursElem.innerHTML = padWithZero(dateTimeParts.hours, 2);
        minutesElem.innerHTML = padWithZero(dateTimeParts.minutes, 2);
        secondsElem.innerHTML = padWithZero(dateTimeParts.seconds, 2);
    }, 1000);
};


const getTimerEndDate = async () => {
    const config = await getConfig();
    return (config.timerEndDate)
        ? Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
        : new Date();
};


const getDateTimeParts = (timeSpan) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        days: Math.floor(timeSpan / day),
        hours: Math.floor((timeSpan % day) / hour),
        minutes: Math.floor((timeSpan % hour) / minute),
        seconds: Math.floor((timeSpan % minute) / second)
    };
};


export {setCountdownTimer};