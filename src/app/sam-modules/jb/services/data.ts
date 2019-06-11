import { TreeViewNode, TreeViewNodeType } from "../models/tree-view-node";

export const DATA: TreeViewNode[] = [
{
    code: 'AFR014706',
    name: 'GASTRONOME ',
    description: '(LE BIGNON)',
    type: TreeViewNodeType.Customer,
    children: [
    {
        code: '000 139',
        name: '',
        description: 'Refacto',
        type: TreeViewNodeType.Order,
        children: [
        { code: '00 000 198', name: '', description: '', type:TreeViewNodeType.Sample }
        ]
    },
    {
        code: '000 135',
        name: '',
        description: 'Refacto',
        type: TreeViewNodeType.Order,
        children: [
        { code: '00 000 190', name: '', description: '', type:TreeViewNodeType.Sample },
        { code: '00 000 191', name: '', description: '', type:TreeViewNodeType.Sample },
        { code: '00 000 192', name: '', description: '', type:TreeViewNodeType.Sample },
        { code: '00 000 193', name: '', description: '', type:TreeViewNodeType.Sample },
        { code: '00 000 194', name: '', description: '', type:TreeViewNodeType.Sample }
        ]
    }
    ]
},
];