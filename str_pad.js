
var pad_left = str_pad('test',7,'0','STR_LEFT');
console.log(pad_left); //result = 000test
var pad_right = str_pad('test',7,'0','STR_RIGHT');
console.log(pad_right); //result = test000
var pad_both = str_pad('test',7,'0','STR_BOTH');
console.log(pad_both); //result = 0test00

$.str_pad = function(str, str_length, add_string, type){
	var print = str.toString();
	if (add_string === undefined) { add_string = ' '; }
	if (type === undefined) { type = 'STR_RIGHT'; }
	if (type == 'STR_RIGHT') {
		while (print.length < str_length) {
			print = print + add_string;
		}
	} else if (type == 'STR_LEFT') {
		while (print.length < str_length) {
			print = add_string + print;
		}
	} else if (type == 'STR_BOTH') {
		var j = 0;
		while (print.length < str_length) {
			if (j % 2) {
				print = print + add_string;
			} else {
				print = add_string + print;
			}
			j++;
		}
	}
	return print;
};