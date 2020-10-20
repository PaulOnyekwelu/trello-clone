import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import "./index.css";
import App from "./App";
import AppStateProvider from "./store/AppStateContext";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
	<DndProvider backend={HTML5Backend} >
		<AppStateProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</AppStateProvider>
	</DndProvider>,
	document.getElementById("root")
);
