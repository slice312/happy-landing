import {config} from "/src/config.js";
import {Utils} from "/src/app/utils.js";


export class CountdownTimer {
    #dom = {
        timerElement: document.getElementById("ad-countdown-timer"),
        daysElem: document.getElementById("timer-days"),
        hoursElem: document.getElementById("timer-hours"),
        minutesElem: document.getElementById("timer-minutes"),
        secondsElem: document.getElementById("timer-seconds")
    };

    #timerEndDate;


    constructor() {
    }

    runTimer(timerEndDate) {
        this.#timerEndDate = timerEndDate;

        const timeSpan = this.#timerEndDate - new Date();
        if (timeSpan <= 0)
            this.#removeControlFromDom();
        else {
            this.#showControl();
            this.#setTimerValues(timeSpan);
            this.#runTimer();
        }
    }

    #runTimer() {
        const handler = setInterval(() => {
            const timeSpan = this.#timerEndDate - new Date();
            if (timeSpan <= 0) {
                this.#removeControlFromDom();
                clearInterval(handler);
                return;
            }

            this.#setTimerValues(timeSpan);
        }, 1000);
    }

    #setTimerValues(timeSpan) {
        const padWithZero = Utils.String.padWithZero;
        const timeSpanParts = Utils.Date.getTimeSpanParts(timeSpan);

        this.#dom.daysElem.textContent = padWithZero(timeSpanParts.days, 2);
        this.#dom.hoursElem.textContent = padWithZero(timeSpanParts.hours, 2);
        this.#dom.minutesElem.textContent = padWithZero(timeSpanParts.minutes, 2);
        this.#dom.secondsElem.textContent = padWithZero(timeSpanParts.seconds, 2);
    }

    #removeControlFromDom() {
        this.#dom.timerElement.remove();
    }

    #showControl() {
        this.#dom.timerElement.style.visibility = "visible";
    }
}


export const registerAdCountdownTimer = () => {
    const timer = new CountdownTimer();
    timer.runTimer(config.timerEndDate)
};