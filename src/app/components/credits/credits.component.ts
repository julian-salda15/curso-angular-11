import { Component, OnInit } from '@angular/core';
import { Credits } from 'src/utils/const';
import { Credit } from 'src/utils/type';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  credits: Credit[] = Credits;
  notify = false;

  constructor() {
   }

  ngOnInit(): void {
  }

}
