class StringCalc {
    static add(numbers) {
        if (numbers === '') {
            return 0;
        }

        let delimiter = /,|\n/;
        let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

        if (customDelimiterMatch) {
            delimiter = new RegExp(customDelimiterMatch[1]);
            numbers = numbers.slice(customDelimiterMatch[0].length);
        }

        let sum = 0;
        let negNums = [];
        let numArr = numbers.split(delimiter);

        for (let i = 0; i < numArr.length; i++) {
            let num = parseInt(numArr[i]);
            if (num < 0) {
                negNums.push(num);
            } else if (num <= 1000) {
                sum += num;
            }
        }

        if (negNums.length > 0) {
            throw new Error('Negative numbers not allowed: ' + negNums.join(', '));
        }

        return sum;
    }
}
module.exports = StringCalc;