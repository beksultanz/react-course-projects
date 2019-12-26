console.log("App.js is running");

//JSX - JavaSript XML

//create app object title/subtitle 
var app = {
	title: "Indecision App", 
	subtitle: "Put your life in the hands of Creator",
	options: ["One", "Two"]
}
//use title/subtitle in the template
var template= (
	<div>
	<h1>{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	<p>{app.options.length > 0 ? "Here are your options" : "No options" }</p>
	</div>
)


var user = {
	name: "Ali",
	age: 19,
	location: "Archagul"
}
function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p> 
	} 
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : "Anonymous"}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
)


var appRoot = document.getElementById("app");

//render template
ReactDOM.render(template, appRoot);
