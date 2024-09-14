import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  {
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) description: string = "";

  constructor() { }
}
