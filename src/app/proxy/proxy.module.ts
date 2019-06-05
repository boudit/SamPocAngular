import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-data.service';
import { CustomerDto } from './dto/customer-dto';

@NgModule({
  declarations: [InMemoryDataService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CustomerDto
  ]
})
export class ProxyModule { }
