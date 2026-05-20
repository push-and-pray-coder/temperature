const celsius = "°C"
const title = "DAILY WEATHER REPORT";
city = "San Diego";
let temp = 32;
let weatherCondition = "Sunny and humid";
let safetyRecommendation = "Drink water and wear sunscreen";

console.log(`
    Report 1

    ====================
    ${title}}
    ====================

    City:${city}
    Temperature:${temp}${celsius}
    Condition: ${weatherCondition}
    Recommendation: ${safetyRecommendation}
    ====================
    `);

city = "Chicago";
temp = -5;
weatherCondition = "Heavy snow";
safetyRecommendation = "Bundle up and stay indoors if possible";

console.log(`
    Report 1

    ====================
    ${title}
    ====================

    City:${city}
    Temperature:${temp}${celsius}
    Condition: ${weatherCondition}
    Recommendation: ${safetyRecommendation}
    ====================
    `);