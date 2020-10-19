import React from "react";
import AddNewItem from "./components/AddNewItem";
import { useAppContext } from "./store/AppStateContext";
import Column from "./components/Column";
import { AppContainer } from "./styledComponents";


function App() {
	const { state, dispatch } = useAppContext();
	const addList = (text:string) => {
		dispatch({
			type: "ADD_LIST",
			payload: text,
		})
		console.log(state)
	}

	return (
		<AppContainer className="App">
			{state &&
				state.lists.map((list, i) => (
					<Column title={list.text} key={list.id} index={i} />
				))}
			<AddNewItem
				onAdd={addList}
				toggleButtonText="+Add New list"
			/>
		</AppContainer>
	);
}

export default App;
