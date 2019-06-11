import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OrderLoggingService } from '../services/order-logging.service';

@Component({
  selector: 'app-orderlogging',
  templateUrl: './orderlogging.component.html',
  styleUrls: ['./orderlogging.component.css']
})
export class OrderloggingComponent implements OnInit {

  searchFormGroup: FormGroup;
  customersFormGroup: FormGroup;
  ordersFormGroup: FormGroup;
  samplesFormGroup: FormGroup;

  isOptional = false;

  constructor(private _formBuilder: FormBuilder, private orderLoggingCustomerService: OrderLoggingService) { }

  ngOnInit() {
    this.searchFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.customersFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.ordersFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.samplesFormGroup = this._formBuilder.group({
      fourthCtrl: ''
    });
  }

}
