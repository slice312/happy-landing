import {config} from "/src/config";
import "./styles.css";


export const renderDownload = () => {
    const appStoreLink = document.getElementById("download-app-store-link");
    appStoreLink.setAttribute("href", config.appStoreLink);
};