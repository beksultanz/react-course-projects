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
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item One"
		),
		React.createElement(
			"li",
			null,
			"Item Two"
		)
	)
);

var count = 0;
var addOne = function addOne() {
	console.log("addOne");
};
var minusOne = function minusOne() {
	console.log("minusOne");
};
var reset = function reset() {
	console.log("reset");
};

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Count: ",
		count,
		" "
	),
	React.createElement(
		"button",
		{ onClick: addOne },
		"+1"
	),
	React.createElement(
		"button",
		{ onClick: minusOne },
		"-1"
	),
	React.createElement(
		"button",
		{ onClick: reset },
		"reset"
	)
);
console.log(templateTwo);

var appRoot = document.getElementById("app");
//render template 
ReactDOM.render(templateTwo, appRoot);
