const sendPurchaseGoods = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "success";
};


export const Api = {
    sendPurchaseGoods
};