import { useDrag } from "react-dnd";
import { DragItem } from "../libs/dragItem";
import { useAppContext } from "../store/AppStateContext";


export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppContext();
    const begin = () => {
        dispatch({
            type: "SET_DRAGGED_ITEM",
            payload: item
        })
    }
    const end = () => {
        dispatch({
            type: "SET_DRAGGED_ITEM",
            payload: undefined
        })
    }
    const [, drag] = useDrag({ item, begin, end });

    return {drag};
}