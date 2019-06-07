export enum TreeViewNodeType {
    Customer,
    Order,
    Sample
}

export class TreeViewNode {

    code: string;

    name: string;

    description: string;

    type: TreeViewNodeType;

    children?: TreeViewNode[];
}