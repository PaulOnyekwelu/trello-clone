import React, {createContext, useContext, useReducer} from "react";
import { DragItem } from "../libs/dragItem";
import {reducer} from "./reducer";


// defining interfaces
interface Task{
    id: string,
    text: string
}

export interface List {
    id: string,
    text: string,
    tasks: Task[]
}

export interface AppState {
	lists: List[],
	draggedItem: DragItem | undefined
}

interface AppStateContextProps {
	state: AppState,
	dispatch: any
}



export const appData: AppState = {
	lists: [
		{
			id: "0",
			text: "To Do",
			tasks: [{ id: "c0", text: "Generate app scaffold" }],
		},
		{
			id: "1",
			text: "In Progress",
			tasks: [{ id: "c2", text: "Learn Typescript" }],
		},
		{
			id: "2",
			text: "Done",
			tasks: [{ id: "c3", text: "Begin to use static typing" }],
		},
	],
	draggedItem: undefined
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);
export const useAppContext = () => {
	return useContext(AppStateContext);
}


const AppStateProvider = ({children}:React.PropsWithChildren<{}>) => {

	const [state, dispatch] = useReducer(reducer, appData);
	return (
		<AppStateContext.Provider value={{state, dispatch}} >
			{children}
		</AppStateContext.Provider>
	)
}

export default AppStateProvider;
