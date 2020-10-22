import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
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

    const [, drag, preview] = useDrag({ item, begin, end });

    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true})
    }, [preview])

    return {drag};
}