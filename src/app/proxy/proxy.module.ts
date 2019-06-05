import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-data.service';
import { CustomerDto } from './dto/customer-dto';
import { OrderDto } from './dto/order-dto';
import { SampleDto } from './dto/sample-dto';

@NgModule({
  declarations: [InMemoryDataService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CustomerDto,
    OrderDto,
    SampleDto
  ]
})

export class ProxyModule { }
