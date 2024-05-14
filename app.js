// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
} 
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return Number(euro) * oneEuroIs.USD
}

const fromDollarToYen = (dollar) => {
    return Number(dollar) * oneEuroIs.JPY
}

const fromYenToPound = (yen) => {
    return Number(yen) * oneEuroIs.GBP
}

// Solo un registro en consola para nosotros
console.log(sum(3,7))


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
