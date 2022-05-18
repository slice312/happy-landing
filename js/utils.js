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
 * Приводит число к строке заполняя leading zeroes под указанную длину.
 * @param {number} num - Число
 * @param {number} targetLength - Длина строки
 * @returns {string} - Число в виде строки с leading zeroes
 */
const padWithZero = (num, targetLength) => {
    return String(num).padStart(targetLength, "0");
};


export const Utils = {
    Date: {
        parseDateWithDefaultFormat
    },
    String: {
        padWithZero
    }
};