export function translateCurrencyOfUDS(sale: number | string): number | string {
    const saleUDS = 84.45; // курс на 10.09.2025
    if (typeof sale === "string") {
        return sale;
    } else {
        return "$" + Number((sale/saleUDS).toFixed(2));
    }
}
