// TS Function
function calcTax(income:number): number {
    let taxRate;
    if (income >= 50000) {
        taxRate = 0.2;
    }
    else {
        taxRate = 0.1;
    }
    const tax = income * taxRate;
    return tax;
}
