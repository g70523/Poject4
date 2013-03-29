/*Louise Whitney
Scalable Data Infrastructures
1303
Project 4
*/

//Start Library

var Library = function() {

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
	return n;
};
//decimalPoint(1.123456);

// Number String
var stringNumber = function(){
	
	var str = 23;
	return str;
};
stringNumber(23);

//Email 
//Email Function
var verifyEmail = function(email) {

	var e = email;
	var at = e.indexOf("@");
	var dot = e.lastIndexOf(".");

		if (at < 1 || dot < at + 2 || dot + 2 >= e.length) {
  			return false;
  		} else {
  			return true;
  		}
};
verifyEmail("louisewhitney@fullsail.edu");

//TitleCase                                                                                  
var title = function(string) {

	var cap = string.split(" ");
    
    	for ( var i = 0; i < cap.length; i++ ) {
    	
        	var x = cap[i].charAt(0).toUpperCase();
       		 cap[i] = x + cap[i].substr(1);
    	}
    return cap.join(" ");

};
title("Sucess!!");

// Smallest Number
var smallNumber = function() {
	var array = [1,4,7,9,10,14,15];
	var x = Math.max(12,14);
	for (var x =14; x < array.length; x++);
	return x;
};
smallNumber(14)


return{
	"phoneNumber"	: phoneNumber,
	"decimalPoint"	: decimalPoint,
	"stringNumber"	: stringNumber,
	"verifyEmail"	: verifyEmail,
	"title"			: title,
	"smallNumber"	: smallNumber
}

};


var newLib = new Library();

console.log("phoneNumber: " + newLib.phoneNumber("123-456-7890"));
console.log("stringNumber: " + newLib.stringNumber("23"));
console.log("verifyEmail: " + newLib.verifyEmail("louisewhtiney@fullsail.edu"));
console.log("title: " + newLib.title("Success!"));
console.log("smallNumber: " + newLib.smallNumber("14"));
console.log("decimalPoint: " + newLib.decimalPoint(1.123456));