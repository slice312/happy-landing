import {ModalOrder} from "/src/app/components/templates/modal-order";
import "./styles.css";


export const renderAppPreview = () => {
    const btn = document.getElementById("app-preview-btn-buy-now");
    btn.onclick = () => ModalOrder.openModal(3);
};
