
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    const ascii_0 = 48;
    const shortArray = a.length <= b.length ? a.split('') : b.split('');
    const longArray = a.length > b.length ? a.split('') : b.split('');

    let sizeShortArray = shortArray.length;
    let indexLongArray = longArray.length - 1;
    let carry = 0;

    for (let i = sizeShortArray - 1; i >= 0; i--) {
        let sum = (ascii_current(shortArray[i]) - ascii_0) + (ascii_current(longArray[indexLongArray]) - ascii_0) + carry;

        switch (sum) {
            case(3) :
                longArray[indexLongArray--] = '1';
                carry = 1;
                break;
            case (2):
                longArray[indexLongArray--] = '0';
                carry = 1;
                break;
            case (1):
                longArray[indexLongArray--] = '1';
                carry = 0;
                break;
            default :
                longArray[indexLongArray--] = '0';
                carry = 0;
        }
    }

    outerLoop:
    for (let i = indexLongArray; i >= 0; i--) {
        let sum = (ascii_current(longArray[i]) - ascii_0) + carry;
        switch (sum) {
            case (2):
                longArray[i] = '0';
                carry = 1;
                break;
            case (1):
                longArray[i] = '1';
                carry = 0;
                break outerLoop;
            default:
                longArray[i] = '0';
                carry = 0;
                break outerLoop;
        }
    }

    return finalAnswerToString(longArray, carry);
};

/**
 * @param {string} character
 * @return {number}
 */
function ascii_current(character) {
    return character.codePointAt(0);
}

/**
 * @param {string[]}longArray
 * @param {number} carry
 * @return {string}
 */
function finalAnswerToString(longArray, carry) {
    let arrayToString = longArray.join("");
    let leadingBit = arrayToString.indexOf("1");

    return carry === 1
            ? "1" + arrayToString
            : leadingBit > -1 ? arrayToString.substr(leadingBit)
            : "0";
}
