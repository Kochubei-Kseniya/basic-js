const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
	let counter = 0;
  matrix.forEach(function(item){
  	for(let i = 0; i < item.length; i++) {
    	if (item[i] === "^^") counter ++;
    }
	})  
  return counter;
}
