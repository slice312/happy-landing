
export class ModalOrder {
    #rootControl = document.getElementById("modal-order");

    #form = document.getElementById("modal-order-form");

    #planNum = 1;
    constructor() {
    }

    init() {
        this.#form.onsubmit = (e) => {
            e.preventDefault(); // прервать перезагрузку страницы

            const selectedPlan = Array.from(this.#form.elements.plan)
                .find(x => x.checked)
                ?.value;

            console.log("selected plan", selectedPlan);
            console.log("lol kek");
        }
    }

    open(selectedPlan = 1) {
        document.body.classList.add("modal-open");
        this.#rootControl.classList.add("modal-order_open")

        const radio =  Array.from(this.#form.elements.plan)
            .find(x => x.value === String(selectedPlan));

        if (radio)
            radio.checked = true;
    }
}