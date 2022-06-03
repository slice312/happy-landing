import {renderComponents} from "/src/components";
import {getConfig} from "/src/config";


export const app = () => {
    getConfig()
        .then(config => {
            renderComponents(config);
            console.log();
        });
};