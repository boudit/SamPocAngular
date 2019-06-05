import { ISampleDto } from './i-sample-dto';

export interface IOrderDto {

    code(): string;

    date: Date;

    receptionDate: Date;

    reference: string;

    internalReference: string;

    logisticReference: string;

    invoiceDetails: string;

    description: string;

    samples: ISampleDto[];
}
