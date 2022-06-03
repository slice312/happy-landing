import "./styles.css";


export const renderDownload = (appStoreLink) => {
    const appStoreLinkElem = document.getElementById("download-app-store-link");
    appStoreLinkElem.setAttribute("href", appStoreLink);
};