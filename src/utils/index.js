


export const dateFormat = (date) =>
    date.toLocaleDateString("en-GB").replaceAll("/","-");

export const moneyFormat = (amount) => `£${amount.toLocaleString("en-GB")}`