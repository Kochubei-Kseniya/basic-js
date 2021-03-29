const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 1;
    let arrayDepth = 0;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        i = this.calculateDepth(item);
        if (arrayDepth < i) arrayDepth = i;
      }
    });
    return arrayDepth + 1;
  }
};
