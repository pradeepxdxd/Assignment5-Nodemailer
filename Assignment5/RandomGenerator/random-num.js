const randomNumber = require('random-number');
const randomNum = () => {
    let options = {
        min: 1000,
        max: 9999,
        integer: true
    }
    return randomNumber(options);
}

module.exports = randomNum;