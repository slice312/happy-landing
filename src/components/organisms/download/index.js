import "./styles.css";
import {config} from "/src/config";


export const renderDownload = () => {
    const appStoreLink = document.getElementById("download-app-store-link");
    appStoreLink.setAttribute("href", config.appStoreLink);
};