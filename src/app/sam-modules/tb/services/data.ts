import { Customer } from "../models/customer";
import { Order } from "../models/order";
import { Sample } from "../models/sample";

export const CUSTOMERS: Customer[] = [
{
    Code: 'AFR014706',
    Name: 'GASTRONOME ',
    Description: '(LE BIGNON)',
    Comment: '',
    Orders: [
    {
        Code: '270-000-139',
        Name: '',
        Description: 'Refacto',
        Comment: '',
        samples: [
        { Code: '00 000 198', Description: '', Comment: '' }
        ]
    },
    {
        Code: '270-000-140',
        Name: '',
        Description: 'Yolo',
        Comment: '',
        samples: [
        { Code: '00 000 200', Description: '', Comment: '' },{ Code: '00 000 201', Description: '', Comment: '' }, { Code: '00 000 202', Description: '', Comment: '' }
        ]
    }
    ]
},
{
    Code: 'AFR014707',
    Name: 'GASTRONOME ',
    Description: '(LA BIGNONNE)',
    Comment: '',
    Orders: [
    {
        Code: '270-000-239',
        Name: '',
        Description: 'Refacto',
        Comment: '',
        samples: [
        { Code: '00 000 298', Description: '', Comment: '' }
        ]
    },
    {
        Code: '270-000-240',
        Name: '',
        Description: 'Yolo',
        Comment: '',
        samples: [
        { Code: '00 000 300', Description: '', Comment: '' },{ Code: '00 000 301', Description: '', Comment: '' }, { Code: '00 000 302', Description: '', Comment: '' }
        ]
    }
    ]
}
];