import { Sample } from './sample';

export class Order {
    
    Code: string;

    Name: string;

    Description: string;

    Comment: string;

    samples: Sample[];
}