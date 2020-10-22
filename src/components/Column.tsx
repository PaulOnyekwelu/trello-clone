import React, { useRef } from 'react';
import AddNewItem from './AddNewItem';
import { useAppContext } from '../store/AppStateContext';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from '../styledComponents';
import { useItemDrag } from '../customHooks/useItemDrag';
import { useItemDrop } from '../customHooks/useItemDrop';
import { isHidden } from '../libs/isHidden';

interface ColumnProps {
    title: string,
    index: number
    id: string,
    isPreview?: boolean
}


const Column = ({ title, index, id, isPreview }:ColumnProps) => {
    const { state:{lists, draggedItem}, dispatch } = useAppContext();
    const columnRef = useRef<HTMLDivElement>(null)
    const {drag} = useItemDrag({type: "COLUMN", text: title, id, index})
    const {drop} = useItemDrop(index)

    const addTask = (text:string) => {
        dispatch({
            type: "ADD_TASK",
            payload: {index, text}
        })
    }

    drag(drop(columnRef));

    return(
        <ColumnContainer isPreview={isPreview} ref={columnRef} isHidden={isHidden(isPreview, draggedItem, "COLUMN", id)} >
            <ColumnTitle>{title}</ColumnTitle>
            {
                lists[index].tasks.map(task => (<Card key={task.id} text={task.text} />))
            }
            <AddNewItem onAdd={addTask} toggleButtonText="+Add New list" dark />
        </ColumnContainer>
    )
}

export default Column;
