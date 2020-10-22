import React from "react";
import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "../styledComponents";
import Column from "./Column";

function getItemStyles (currentOffSet: XYCoord | null): React.CSSProperties {
    if(!currentOffSet){
        return {
            display: "none"
        }
    }
    const { x, y } = currentOffSet;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform, 
        WebkitTransform: transform
    }
}

interface CustomDragLayerProps {
    isPreview: boolean
}


const CustomDragLayer = ({isPreview}: {isPreview: boolean}) => {
    const { isDragging, item, currentOffSet } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffSet: monitor.getSourceClientOffset()
    }))

    const IsDraggingComponent = ({isPreview}:{isPreview: boolean}) => {
        return (
            <CustomDragLayerContainer>
                <div style={getItemStyles(currentOffSet)}>
                    <Column isPreview={isPreview} index={item.index} title={item.text} id={item.id} />
                </div>
            </CustomDragLayerContainer>
        )
    }

    return isDragging ? (<IsDraggingComponent isPreview={isPreview} />) : null;
}

export default CustomDragLayer;