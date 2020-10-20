export interface ColumnDragItem {
    index: number,
    id: string,
    text: string,
    type: "COLUMN"
}

export type DragItem = ColumnDragItem;