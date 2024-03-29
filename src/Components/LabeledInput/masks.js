export function cardNumber(e) {
    e.currentTarget.maxLength = 19;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{4}(?!\s))/g, "$1 ");
    value = value.replace(/\s+$/, '')
    e.currentTarget.value = value;
    return e;
}

export function getCardBrand(e) {
    const masks = [
        {
          regex: /^4\d{0,15}/,
          cardtype: "visa",
        },
        {
          regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
          cardtype: "mastercard",
        },
        {
          regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
          cardtype: "discover",
        },
        {
          regex: /^(?:35\d{0,2})\d{0,12}/,
          cardtype: "jcb",
        },
        {
            regex: /^3[47]\d{0,13}/,
            cardtype: "american express",
        },
        {
            regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
            cardtype: "diners Club"
        }
    ]

    let value = e.currentTarget.value;
    let cardType = masks.filter((card) => {if(value.match(card.regex)) {return true}})[0]?.cardtype;
    if(!cardType) {
        cardType = 'default';
    }
    console.log(cardType)
    return cardType;
}
export function expiry(e) {
    e.currentTarget.maxLength = 5;
    let value = e.currentTarget.value;

    if (value.match(/^(\d{2})(\d{2})$/)) {
        value = value.replace(/\D(?!\/)/g, ""); // Correção aqui
        let month = value.slice(0, 2);
        let year = value.slice(2, 4);

        // Verificar se o mês e o ano são válidos
        let currentYear = new Date().getFullYear() % 100; // Pegar os dois últimos dígitos do ano atual
        let currentMonth = new Date().getMonth() + 1; // getMonth() retorna o mês baseado em zero (0 a 11)

        if (parseInt(month) > 12 || parseInt(month) < 1 || parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            alert("Data de expiração inválida");
            e.currentTarget.value = ""; // Limpar o valor do campo de entrada
            return;
        }

        return;
    }
    value = value.replace(/\D/g, "");
    value = value.replace(/^(1[0-2]|0[0-9])(\d)/g, '$1/$2');
    value = value.replace(/^(\d{2})(\d{2})/g, '$1/$2');

    e.currentTarget.value = value;

    return e;
}


export function cvc(e) {
    e.currentTarget.maxLength = 4;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    e.currentTarget.value = value;
    return e;
}