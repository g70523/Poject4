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
		console.log("Your phone number is correct!")
		return true;
	} else {
		console.log("Somthing is wrong!")
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

// Number String
var stringNumber = function(){
	
	var str = 23;
	console.log(str.valueOf());
};
stringNumber(23);

//Email 
//Email Function
var checkEmail = function(email) {

	var e = email;
	var at = e.indexOf("@");
	var dot = e.lastIndexOf(".");

		if (at < 1 || dot < at + 2 || dot + 2 >= e.length) {
			console.log("Make sure your e-mail is correct!")
  			return false;
  		} else {
  			return true;
  		}
};
checkEmail("louisewhitney@fullsail.edu");

//TitleCase                                                                                  
var title = function(string) {

	var cap = string.split(" ");
    
    	for ( var i = 0; i < cap.length; i++ ) {
    	
        	var x = cap[i].charAt(0).toUpperCase();
       		 cap[i] = x + cap[i].substr(1);
    	}
    	console.log("I'm awesome!")
    return cap.join(" ");

};
title("Sucess!!");

// Smallest Number
var smallNumber = function() {
	var array = [1,4,7,9,10,14,15];
	var x = Math.max(12,14);
	for (var x =14; x < array.length; x++);
	console.log(x);
	return true;
};
smallNumber(14)


