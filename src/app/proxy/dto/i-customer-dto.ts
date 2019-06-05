import { IOrderDto } from './i-order-dto';

export interface ICustomerDto {
    
    code(): string;

    name: string;

    comment: string;

    orders: IOrderDto[];
}

