import { ISampleDto } from './i-sample-dto';

export class SampleDto implements ISampleDto {

    private _code: string;    
    public code() : string {
        return this._code;
    }
      
    public comment: string;
    
    public description: string;
}
