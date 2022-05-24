import {app} from "./app/index.js";
import "./index.css";


/*
TODO: background в png
    * картинки растровые в png переделать
    * sticky nav-header и тени
 */
document.addEventListener("DOMContentLoaded", app);



window.addEventListener("load", () => {
    // const obj = document.getElementById("obj");
    // const svg = obj.contentDocument.documentElement;
    // // svg.setAttribute("fill", "red")
    // svg.className.baseVal = "alo"
    // const attrs = svg.attributes;
    // console.log(svg);
    // debugger
});



class SvgIcon extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello World...</h1>`;
        this.style.color = "red";

        const src = this.getAttribute("src");
        // const svg = require(src);
        console.log(src);
    }
}

customElements.define('svg-icon', SvgIcon);