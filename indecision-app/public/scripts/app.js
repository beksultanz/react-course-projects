"use strict";

console.log("App.js is running");

//JSX - JavaSript XML

//create app object title/subtitle 
var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of Creator",
	options: ["One", "Two"]
	//use title/subtitle in the template
};var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? "Here are your options" : "No options"
	)
);

var user = {
	name: "Ali",
	age: 19,
	location: "Archagul"
};
function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
}

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name ? user.name : "Anonymous"
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById("app");

//render template
ReactDOM.render(template, appRoot);
