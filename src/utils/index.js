/**
 * Парсинг строки в дату по дефолтному формату.
 * @param {string} dateTimeStr - Дата-время в формате dd.MM.yyyy HH:mm
 * @returns {Date} - Объект даты
 */
const parseDateWithDefaultFormat = (dateTimeStr) => {
    const regexFormat = /(\d{2})\.(\d{2})\.(\d{4}) +(\d{2}):(\d{2})/;

    const [day, month, year, hour, minute] = regexFormat.exec(dateTimeStr)
        .splice(1)
        .map(x => Number(x));

    return new Date(year, month - 1, day, hour, minute);
};

/**
 * @param {number} timeSpan
 * @returns {{hours: number, seconds: number, minutes: number, days: number}}
 */
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


/**
 * Приводит число к строке заполняя leading zeroes под указанную длину.
 * @param {number} num - Число
 * @param {number} targetLength - Длина строки
 * @returns {string} - Число в виде строки с leading zeroes
 */
const padWithZero = (num, targetLength) => {
    return String(num).padStart(targetLength, "0");
};

/**
 * @param {string} elemId - Id html элемента
 * @param {string} text - текст
 */
const setTextToElement = (elemId, text) => {
    document.getElementById(elemId).textContent = text;
};


export const Utils = {
    Date: {
        parseDateWithDefaultFormat,
        getTimeSpanParts
    },
    String: {
        padWithZero
    },
    setTextToElement
};