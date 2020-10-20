import React, { useRef } from 'react';
import AddNewItem from './AddNewItem';
import { useAppContext } from '../store/AppStateContext';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from '../styledComponents';
import { useItemDrag } from '../customHooks/useItemDrag';
import { useItemDrop } from '../customHooks/useItemDrop';

interface ColumnProps {
    title: string,
    index: number
    id: string
}


const Column = ({ title, index, id }:ColumnProps) => {
    const { state:{lists}, dispatch } = useAppContext();
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
        <ColumnContainer ref={columnRef}>
            <ColumnTitle>{title}</ColumnTitle>
            {
                lists[index].tasks.map(task => (<Card key={task.id} text={task.text} />))
            }
            <AddNewItem onAdd={addTask} dark={true} toggleButtonText="+Add New list" />
        </ColumnContainer>
    )
}

export default Column;
