import { useDrop } from "react-dnd";
import { DragItem } from "../libs/dragItem";
import { useAppContext } from "../store/AppStateContext";


export const useItemDrop = ( index: number) => {
    const {dispatch} = useAppContext();
    const hover = (item: DragItem) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if(dragIndex === hoverIndex){
            return;
        }
        dispatch({type: "MOVE_LIST", payload: {dragIndex, hoverIndex}})
        item.index = hoverIndex;
    }

    const [, drop] = useDrop({ accept: "COLUMN", hover})
    return {drop};
}