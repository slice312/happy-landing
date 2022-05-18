let config = null;

export const getConfig = async () => {
    if (config)
        return config;
    const response = await fetch("http://localhost:3000/config.json");
    config = await response.json();
    return config;
};