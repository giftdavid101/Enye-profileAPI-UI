/**
 * Creates options from profile response
 * @param {*} data - profile Array
 * @returns {{ paymentMethods: string[], genders: string[], cardTypes: string[] }}
 */
export const resolveFilterOptions = (data) => {
    let cardTypes = [];
    let genders = [];
    let paymentTypes = [];
    return data.reduce(
        (res, cur) => {
            if (cur?.CreditCardType) {
                cardTypes.push(cur.CreditCardType.trim());
            }
            if (cur?.Gender) {
                genders.push(cur.Gender.trim());
            }
            if (cur?.PaymentMethod) {
                paymentTypes.push(cur.PaymentMethod.trim());
            }
            res.paymentMethods = Array.from(new Set(paymentTypes));
            res.genders = Array.from(new Set(genders));
            res.cardTypes = Array.from(new Set(cardTypes));
            return res;
        },
        { paymentMethods: [], genders: [], cardTypes: [] }
    );
};
