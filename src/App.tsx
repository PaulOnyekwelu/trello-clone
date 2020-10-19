import React from "react";
import AddNewItem from "./AddNewItem";
import { useAppContext } from "./AppStateContext";
import Card from "./Card";
import Column from "./Column";
import { AppContainer } from "./styledComponents";

function App() {
	const { state } = useAppContext();

	return (
		<AppContainer className="App">
			{state &&
				state.lists.map((list, i) => (
					<Column title={list.text} key={list.id} index={i} />
				))}
			<AddNewItem
				onAdd={f => console.log("added...")}
				toggleButtonText="+Add New list"
			/>
		</AppContainer>
	);
}

export default App;
