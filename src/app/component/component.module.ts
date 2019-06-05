import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFunctionModule } from '../service-function/service-function.module';
import { ServiceTechModule } from '../service-tech/service-tech.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceFunctionModule,
    ServiceTechModule
  ]
})
export class ComponentModule { }
