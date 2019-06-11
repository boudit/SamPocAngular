import { SampleDto } from './sample-dto';

export class OrderDto {

    public code : string;
      
    public date: Date;

    public receptionDate: Date;

    public reference: string;

    public internalReference: string;

    public logisticReference: string;

    public invoiceDetails: string;
    
    public description: string;

    samples: SampleDto[];

}
