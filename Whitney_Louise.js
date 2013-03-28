/*Louise Whitney
Scalable Data Infrastructures
1303
Project 4
*/

//Start Library

// String Functions


//Phone Number 
var phoneNumber = function(phone) {

	var a = phone.length;
	var b = "-";
	var c = b.indexOf("-");
	var d = b.lastIndexOf("-");

	if (a == 12 || c == 3 || d == 7) {
		return true;
	} else {
		return false;
	}

};
phoneNumber("123-456-7890");

// Decimal  Places
var decimalPoint = function(num){

	var n=num.toFixed(4);
	console.log(n);
};
decimalPoint(1.123456);