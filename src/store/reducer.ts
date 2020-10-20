import { AppState, List } from "./AppStateContext";
import { v4 } from "uuid";
import { moveItem } from "../libs/moveItem";
import { DragItem } from "../libs/dragItem";

type Action =
	| { type: "ADD_LIST"; payload: string }
	| { type: "ADD_TASK"; payload: { text: string; index: number } }
    | { type: "MOVE_LIST"; payload: { dragIndex: number; hoverIndex: number } }
    | { type: "SET_DRAGGED_ITEM", payload: DragItem | undefined }


export const reducer = (
	state: AppState,
	{ type, payload }: Action | any
): AppState => {
	switch (type) {
		case "ADD_LIST": {
			return {
				...state,
				lists: [...state.lists, { id: v4(), text: payload, tasks: [] }],
			};
		}
		case "ADD_TASK": {
			return {
				...state,
				lists: state.lists.map((list: List, i: number) => {
					if (i === payload.index) {
						return {
							...list,
							tasks: [...list.tasks, { id: v4(), text: payload.text }],
						};
					}
					return list;
				}),
			};
		}
		case "MOVE_LIST": {
            const { dragIndex, hoverIndex } = payload;
            const newState = {...state};
            newState.lists = moveItem(newState.lists, dragIndex, hoverIndex);
            return newState;
        }
        case "SET_DRAGGED_ITEM": {
            return {...state, draggedItem: payload};
        }
		default: {
			return state;
		}
	}
};
