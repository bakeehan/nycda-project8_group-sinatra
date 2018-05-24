var displayCharacters = document.getElementById("lengthCheck");


window.setInterval(checkKeys, 100);

function checkKeys() {
	var typing = document.getElementById("mailcontent");
	var remains = 1950 - (typing.value.length);
	// console.log(remains);
	if (remains == 1) {
		displayCharacters.innerHTML = remains + " character remaining";
	} else if (remains < 1) {
		displayCharacters.innerHTML = "<b>Too long!</b>"
	} else if (remains <50) {
		displayCharacters.innerHTML = "<b>" + remains + " characters remaining</b>";
	} else {
		displayCharacters.innerHTML = remains + " characters remaining";
	}
}