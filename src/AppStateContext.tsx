import React, {createContext, useContext} from "react";

// defining interfaces
interface Task{
    id: string,
    text: string
}

interface List {
    id: string,
    text: string,
    tasks: Task[]
}

interface AppState {
    lists: List[]
}

interface AppStateContextProps {
	state: AppState
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
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);
export const useAppContext = () => {
	return useContext(AppStateContext);
}

const AppStateProvider = ({children}:React.PropsWithChildren<{}>) => {
	return (
		<AppStateContext.Provider value={{state: appData}} >
			{children}
		</AppStateContext.Provider>
	)
}

export default AppStateProvider;
