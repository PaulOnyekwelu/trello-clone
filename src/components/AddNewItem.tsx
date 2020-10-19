import React, { useState } from "react";
import FormInput from "./FormInput";
import { AddItemButton } from "../styledComponents";

interface AddNewItemProps {
    onAdd(text: string): void,
    toggleButtonText: string,
    dark?: boolean
}


const AddNewItem = ({toggleButtonText, onAdd, dark }:AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);

    if(showForm){
        return(<FormInput onAdd={text => {
            onAdd(text);
            setShowForm(false);
        }} />)
    }

    return(
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>{toggleButtonText}</AddItemButton>
    )
}

export default AddNewItem;