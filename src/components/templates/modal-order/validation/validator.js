import {Rule} from "./rules";


class InputValidator {
    #fields = {
        name: {
            elements: {
                input: document.getElementById("modal-order-input-name"),
                status: document.getElementById("modal-order-input-name-err")
            },
            rules: [Rule.required, Rule.atLeast(3)],
            errorText: ""
        },
        email: {
            elements: {
                input: document.getElementById("modal-order-input-email"),
                status: document.getElementById("modal-order-input-email-err")
            },
            rules: [Rule.required, Rule.atLeast(3)],
            errorText: ""
        }
    };

    get fields() {
        return this.#fields;
    }

    validate(fieldName) {
        this.#fields[fieldName].errorText = this.#getErrorText(fieldName);
        this.#renderError(fieldName);
    }

    clearError(fieldName) {
        this.#fields[fieldName].errorText = "";
        this.#renderError(fieldName);
    }

    #renderError(fieldName) {
        const {status, input} = this.#fields[fieldName].elements;
        const {errorText} = this.#fields[fieldName];

        if (errorText)
            input.classList.add("input-default_error");
        else
            input.classList.remove("input-default_error");

        status.textContent = errorText;
    };

    #getErrorText(fieldName) {
        const rules = this.#fields[fieldName].rules;
        const value = this.#fields[fieldName].elements.input.value;

        let errorText = "";

        rules.some(rule => {
            errorText = rule(value);
            return errorText;
        });

        return errorText;
    };
}


class CheckBoxValidator {
    #fields = {
        srcInfo: {
            elements: {
                boxes: document.getElementById("modal-order-form").elements.srcInfo,
                status: document.getElementById("modal-order-checkbox-src")
            },
            rules: [Rule.checkedAtLeastOnce],
            errorText: ""
        }
    };

    get fields() {
        return this.#fields;
    }

    validate(fieldName) {
        this.#fields[fieldName].errorText = this.#getErrorText(fieldName);
        this.#renderError(fieldName);
    }

    clearError(fieldName) {
        this.#fields[fieldName].errorText = "";
        this.#renderError(fieldName);
    }

    #renderError(fieldName) {
        const {status} = this.#fields[fieldName].elements;
        const {errorText} = this.#fields[fieldName];
        status.textContent = errorText;
    };

    #getErrorText(fieldName) {
        const rules = this.#fields[fieldName].rules;
        const boxes = this.#fields[fieldName].elements.boxes;

        let errorText = "";

        rules.some(rule => {
            errorText = rule(boxes);
            return errorText;
        });

        return errorText;
    };
}


const validate = (validator) => {
    Object.keys(validator.fields)
        .forEach(field => validator.validate(field));

    return Object.values(validator.fields)
        .every(field => !field.errorText);
};

const clearErrors = (validator) => {
    Object.keys(validator.fields)
        .forEach(field => validator.clearError(field));
};


export const Validator = {
    validateAll: () => {
        let isValid = validate(new InputValidator());
        isValid &= validate(new CheckBoxValidator());
        return isValid;

    },
    clearErrorsAll: () => {
        clearErrors(new InputValidator());
        clearErrors(new CheckBoxValidator());
    }
};