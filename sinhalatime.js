
let sinhalatime = function() {
	let now = new Date();
	let amOrpm = now.getHours() >= 12 ? 'පස්වරු' : 'පෙරවරු';
	return amOrpm + ' ' + (now.getHours() > 13 ? (now.getHours() - 12) : now.getHours()) + ' පසුවී විනාඩි ' + now.getMinutes() + 'යි';
};


module.exports = { 
	display : () => { 
		return sinhalatime(); 
	} 
};