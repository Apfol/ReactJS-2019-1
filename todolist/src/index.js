import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoLits from "./TodoList";
var destination = document.querySelector("#container");
ReactDOM.render(
	<div>
		<TodoLits/>
	</div>,
	destination
	);