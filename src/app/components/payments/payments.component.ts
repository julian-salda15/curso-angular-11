import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from 'src/utils/type';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input() payments: Payment[] = [];
  @Output() notify = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.notify.emit(true);
  }

}
