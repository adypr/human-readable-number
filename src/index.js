const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = 
function toReadable(number) {
    const num = (number + '').split('');
     num.forEach((word, i, arr) => {
        arr[i] = Number(word);
    });
    if (number > 9 && number < 20) {
        return tenToNineteen[num[1]];
    }
    let res = [];
    let resString = '';
    switch (num.length) {
        case 1:
            resString = units[num[0]];
            break;
        case 2:
            res[0] =  tens[num[0] - 2];
            res[1] = num[1] === 0 ? '' : ` ${units[num[1]]}`;
            resString = res.join('');
            break;
        case 3:
            res[0] = units[num[0]];
            if (num[1] === 1) {
                res[1] = tenToNineteen[num[2]];
                resString = `${res[0]} hundred ${res[1]}`;
            }
            else if (num[1] === 0) {
                res[1] = num[2] === 0 ? '' : ` ${units[num[2]]}`;
                resString = `${res[0]} hundred${res[1]}`;
            } else {
                res[1] =  tens[num[1] - 2];
                res[2] = num[2] === 0 ? '' : ` ${units[num[2]]}`;
                resString = `${res[0]} hundred ${res[1]}${res[2]}`;
            }
            break;
    }
    return resString;
}
