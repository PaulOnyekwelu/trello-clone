import React from "react";
import AddNewItem from "./components/AddNewItem";
import { useAppContext } from "./store/AppStateContext";
import Column from "./components/Column";
import { AppContainer } from "./styledComponents";
import CustomDragLayer from "./components/CustomDragLayer";


function App() {
	const { state, dispatch } = useAppContext();
	const addList = (text:string) => {
		dispatch({
			type: "ADD_LIST",
			payload: text,
		})
	}

	return (
		<AppContainer>
			<CustomDragLayer isPreview={true}/>
			{state &&
				state.lists.map((list, i) => (
					<Column title={list.text} id={list.id} key={list.id} index={i} />
				))}
			<AddNewItem
				onAdd={addList}
				toggleButtonText="+Add New list"
			/>
		</AppContainer>
	);
}

export default App;
