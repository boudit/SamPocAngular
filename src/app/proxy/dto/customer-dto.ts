import { OrderDto } from './order-dto';

export class CustomerDto {

    public code : string;
      
    public name: string;
    
    public comment: string;

    public orders: OrderDto[] = [];
}
