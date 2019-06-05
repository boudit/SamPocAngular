import { ICustomerDto } from './i-customer-dto';
import { IOrderDto } from './i-order-dto';

export class CustomerDto implements ICustomerDto {

    private _code: string;    
    public code() : string {
        return this._code;
    }    

    public name: string;
    
    public comment: string;

    public orders: IOrderDto[] = [];
}
