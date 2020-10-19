import { AppState } from "./AppStateContext";
import { v4 } from "uuid";

// type Action = { type: "ADD_LIST", payload: string } | { type: "ADD_TASK", payload: { text: string; taskId: string } };


export const reducer = (state: AppState, { type, payload }: any) : AppState => {
	switch (type) {
		case "ADD_LIST":{
			return {...state,
				lists: [...state.lists, { id: v4(), text: payload, tasks: [] }],
            };
        }
		case "ADD_TASK": {
			return {...state, lists: state.lists.map((list, i) => {
                if(i === payload.index){
                    return {...list, tasks: [...list.tasks, { id: v4(), text: payload.text }]}
                }
                return list;
            })}
        }
        default: {
            return state
        }
	}
};
