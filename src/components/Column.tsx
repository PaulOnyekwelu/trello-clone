import React from 'react';
import AddNewItem from './AddNewItem';
import { useAppContext } from '../store/AppStateContext';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from '../styledComponents';

interface ColumnProps {
    title: string,
    index: number
}


const Column = ({ title, index }:ColumnProps) => {
    const { state:{lists}, dispatch } = useAppContext();

    const addTask = (text:string) => {
        dispatch({
            type: "ADD_TASK",
            payload: {index, text}
        })
    }

    return(
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {
                lists[index].tasks.map(task => (<Card key={task.id} text={task.text} />))
            }
            <AddNewItem onAdd={addTask} dark={true} toggleButtonText="+Add New list" />
        </ColumnContainer>
    )
}

export default Column;