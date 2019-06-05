import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyModule } from '../proxy/proxy.module';
import { ServiceTechModule } from '../service-tech/service-tech.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProxyModule,
    ServiceTechModule
  ]
})
export class ServiceFunctionModule { }
