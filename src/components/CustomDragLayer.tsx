import React from "react";
import { useDragLayer } from "react-dnd";
import { CustomDragLayerContainer } from "../styledComponents";
import Column from "./Column";


const CustomDragLayer:React.FC = () => {
    const { isDragging, item } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging()
    }))
    const IsDraggingComponent = () => {
        return (
            <CustomDragLayerContainer>
                <Column index={item.index} title={item.text} id={item.id} />
            </CustomDragLayerContainer>
        )
    }

    return isDragging ? (<IsDraggingComponent />) : null
}

export default CustomDragLayer;