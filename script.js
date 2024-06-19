function firstWord(s) {
  // your code here
	if (!s) {
      return s;
   }
	let str=s.trim().split(/\s+/);

	return str[0];
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
