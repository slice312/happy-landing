import {config} from "/src/config.js";
import {Utils} from "/src/app/utils";
import "./styles.css";


export const renderTestimonials = () => {
    const testimonials = config.testimonials;

    Utils.setTextToElement("user-card-comment1", testimonials[0].text);
    Utils.setTextToElement("user-card-name1", testimonials[0].name);
    Utils.setTextToElement("user-card-job1", testimonials[0].job);

    Utils.setTextToElement("user-card-comment2", testimonials[1].text);
    Utils.setTextToElement("user-card-name2", testimonials[1].name);
    Utils.setTextToElement("user-card-job2", testimonials[1].job);

    Utils.setTextToElement("user-card-comment3", testimonials[2].text);
    Utils.setTextToElement("user-card-name3", testimonials[2].name);
    Utils.setTextToElement("user-card-job3", testimonials[2].job);
};