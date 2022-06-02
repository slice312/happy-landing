export const Rule = Object.freeze({
    required: (value) => !value ? "this field is required*" : "",

    atLeast: (num) => (value) => (value?.length < num)
        ? `should be at least ${num} symbols`
        : "",

    checkedAtLeastOnce: (boxes) =>
        !Array.from(boxes).some(box => box.checked)
            ? "this field is required*"
            : ""
});