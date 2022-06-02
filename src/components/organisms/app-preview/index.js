import "./styles.css";
import {ModalOrder} from "/src/components/templates/modal-order";


export const renderAppPreview = () => {
    const btn = document.getElementById("app-preview-btn-buy-now");
    btn.onclick = () => ModalOrder.openModal();
};
