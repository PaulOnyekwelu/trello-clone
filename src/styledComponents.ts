import styled from "styled-components";

// interface declaration
interface AddItemButtonProps {
	dark?: boolean;
}

interface DragPreviewContainerProps {
	isHidden? : boolean
}


// styled components
export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
	opacity: ${({isHidden}) => (isHidden ? 0.2 : 1)}
`;

export const AppContainer = styled.section`
	height: 100%;
	width: 100%;
	background: #3179ba;
	display: flex;
	align-items: flex-start;
	padding: 2rem;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
	width: 300px;
	min-height: 40px;
	background: #ebecf0;
	border-radius: 3px;
	margin-left: 1rem;
	padding: 0.5rem;
	flex-grow: 0;
`;

export const ColumnTitle = styled.div`
	padding: 6px 16px 12px;
	font-weight: bold;
`;

export const CardContainer = styled.div`
	background: #fff;
	max-width: 300px;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	cursor: grab;
	border-radius: 3px;
	box-shadow: 0px 1px 1px 0px #091e4240;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
	max-width: 300px;
	background-color: #ffffff3d;
	color: ${({dark}) => (dark ? "#000" : "#fff")};
	cursor: pointer;
	border: none;
	border-radius: 3px;
	padding: 10px 12px;
	transition: background 85ms ease-in;
	text-align: left;
	width: 100%;

	&:hover {
		background-color: #ffffff52;
	}
`;

export const NewItemFormContainer = styled.section`
	max-width: 300px;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
`;

export const NewItemButton = styled.button`
	background-color: #5aac44;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 6px 12px;
    text-align: center;
    
    &:hover{
        color: #5aac44;
        background-color: #fff;
        border: 1px solid #5aac44;
        padding: 5px 12px;
    }
    &:active{
        background-color: #5aac44;
        color: white;
    }
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px; 
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
