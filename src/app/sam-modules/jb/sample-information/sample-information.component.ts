import { Component, OnInit } from '@angular/core';
import { Sample } from '../models/sample';
import { OrderLoggingScreenService } from '../services/order-logging-screen.service';

@Component({
  selector: 'jb-sample-information',
  templateUrl: './sample-information.component.html',
  styleUrls: ['./sample-information.component.css']
})
export class SampleInformationComponent implements OnInit {
  
  private sample: Sample;
  
  constructor(private sampleService: OrderLoggingScreenService) {
  }
  
  ngOnInit() {
    this.sampleService.postSample.subscribe(data => this.LoadData(data))
  }
  
  LoadData(data: Sample) {
    if (data && this.sample && data.Code === this.sample.Code) {
      return;
    }

    this.sample = data;
  }
}
