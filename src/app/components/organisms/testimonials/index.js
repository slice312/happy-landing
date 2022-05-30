import {config} from "/src/config.js";
import "./styles.css";


export const renderTestimonials = () => {
    const testimonials = config.testimonials;

    setTextToElement("user-card-comment1", testimonials[0].text);
    setTextToElement("user-card-name1", testimonials[0].name);
    setTextToElement("user-card-job1", testimonials[0].job);

    setTextToElement("user-card-comment2", testimonials[1].text);
    setTextToElement("user-card-name2", testimonials[1].name);
    setTextToElement("user-card-job2", testimonials[1].job);

    setTextToElement("user-card-comment3", testimonials[2].text);
    setTextToElement("user-card-name3", testimonials[2].name);
    setTextToElement("user-card-job3", testimonials[2].job);
};


const setTextToElement = (elemId, text) => {
    document.getElementById(elemId).textContent = text;
};