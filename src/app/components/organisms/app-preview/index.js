import {openModal} from "/src/app/components/organisms/modal-order";
import "./styles.css";


export const renderAppPreview = () => {
    const btn = document.getElementById("app-preview-btn-buy-now");
    btn.onclick = () => openModal(3);
};
