function showAlert(){
	alert("Hi! you are working on javascript.");
}
function showPrompt(){
	name = prompt("enter your name:");
	result = confirm("your name is " + name);
	if(result != ""){
		document.write("your entered name is "+ name);
	}
	else{
		document.write("you are not confirmed name.");
	}
}