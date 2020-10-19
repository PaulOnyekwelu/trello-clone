import React, { useEffect, useRef, useState } from "react";
import { useFocus } from "./libs/useFocus";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styledComponents";

interface FormInputProps {
    onAdd(text: string):void
}

const FormInput = ({onAdd}:FormInputProps) => {

    const [text, setText] = useState('');
    const inputRef = useFocus()
    
    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} type="text" placeholder="" value={text} onChange={e => setText(e.target.value)} />
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )
}

export default FormInput;