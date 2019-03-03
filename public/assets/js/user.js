
var btnUsers = document.querySelector('#btn-users');
var divUsers = document.querySelector('#div-users');

window.onload = function(){
	var xhttp = new XMLHttpRequest();

	btnUsers.onclick = function() { 

		xhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200){

				var users = JSON.parse(this.responseText);
				console.log(users);
			}
		}

		xhttp.open('GET', "ajax/user.php", true);
		xhttp.send();
	}	
}