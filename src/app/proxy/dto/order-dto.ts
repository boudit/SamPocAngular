import { IOrderDto } from './i-order-dto';
import { ISampleDto } from './i-sample-dto';

export class OrderDto implements IOrderDto {

    private _code: string;    
    public code() : string {
        return this._code;
    }
        
    public date: Date;

    public receptionDate: Date;

    public reference: string;

    public internalReference: string;

    public logisticReference: string;

    public invoiceDetails: string;
    
    public description: string;

    samples: ISampleDto[];

}
