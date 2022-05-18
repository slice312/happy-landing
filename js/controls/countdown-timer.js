import {config} from "/js/config.js";
import {Utils} from "/js/utils.js";

const padWithZero = Utils.String.padWithZero;


const registerAdCountdownTimer = () => {
    const daysElem = document.getElementById("timer-days");
    const hoursElem = document.getElementById("timer-hours");
    const minutesElem = document.getElementById("timer-minutes");
    const secondsElem = document.getElementById("timer-seconds");

    const timerEndDate = getTimerEndDate();

    const handler = setInterval(() => {
        const now = new Date();
        const timeSpan = timerEndDate - now;

        if (timeSpan <= 0) {
            const timerElement = document.getElementById("ad-countdown-timer");
            timerElement.remove();
            clearInterval(handler);
            return;
        }

        const timeSpanParts = getTimeSpanParts(timeSpan);

        daysElem.innerHTML = padWithZero(timeSpanParts.days, 2);
        hoursElem.innerHTML = padWithZero(timeSpanParts.hours, 2);
        minutesElem.innerHTML = padWithZero(timeSpanParts.minutes, 2);
        secondsElem.innerHTML = padWithZero(timeSpanParts.seconds, 2);
    }, 1000);
};


const getTimerEndDate = () => {
    return (config.timerEndDate)
        ? Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
        : new Date();
};


const getTimeSpanParts = (timeSpan) => {
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


export {registerAdCountdownTimer};