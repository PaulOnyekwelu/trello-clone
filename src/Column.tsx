import React from 'react';
import AddNewItem from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styledComponents';

interface ColumnProps {
    title: string
}


const Column = ({ title, children }:React.PropsWithChildren<ColumnProps>) => {
    return(
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {children}
            <AddNewItem onAdd={f=> console.log('added...')} dark={true} toggleButtonText="+Add New list" />
        </ColumnContainer>
    )
}

export default Column;