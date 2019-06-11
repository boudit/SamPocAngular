import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';

import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { OrderLoggingComponent } from './order-logging/order-logging.component';
import { OrderLoggingSearchComponent } from './order-logging-search/order-logging-search.component';
import { OrderLoggingTreeViewComponent } from './order-logging-tree-view/order-logging-tree-view.component';
import { SampleInformationComponent } from './sample-information/sample-information.component';

@NgModule({
  declarations: [
    OrderLoggingSearchComponent,
    OrderLoggingComponent,
    CustomerInformationComponent,
    OrderInformationComponent,
    SampleInformationComponent,
    OrderLoggingTreeViewComponent
  ],
  imports: [  
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CustomerInformationComponent,
    OrderInformationComponent,    
    OrderLoggingComponent,
    OrderLoggingSearchComponent,
    OrderLoggingTreeViewComponent,
    SampleInformationComponent
  ]
})
export class JBModule { }
