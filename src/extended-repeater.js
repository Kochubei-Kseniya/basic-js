module.exports = function repeater(str, options) {
    let result = '';
    let repeatTimes = options.repeatTimes;
    let separator = options.separator;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;

    if (typeof separator === 'undefined') {
        separator = '+'
    }
    if (typeof additionSeparator === 'undefined') {
        additionSeparator = '|';
    }
    if (typeof addition === 'undefined') {
        addition = '';
    }
    if (typeof repeatTimes === 'undefined') {
        repeatTimes = 1;
    }
    if (typeof additionRepeatTimes === 'undefined') {
        additionRepeatTimes = 1;
    }
    
  i=0;
while (i < (repeatTimes - 1))
{
result = result + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator;
i++;
}
if (i === repeatTimes - 1) {
            result = result + str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition ; 
}
    return result;
};
