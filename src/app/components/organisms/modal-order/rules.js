export const Rule = Object.freeze({
    required: (value) => !value ? "this field is required*" : "",

    moreThan: (num) => (value) => (value?.length <= num)
        ? `should be more then ${num} symbols`
        : "",

    checkedAtLeastOnce: (boxes) =>
        !Array.from(boxes).some(box => box.checked)
            ? "this field is required*"
            : ""
});