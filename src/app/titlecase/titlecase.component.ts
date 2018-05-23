import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  template: `
    <input [(ngModel)]="titleVal" />
    <div>{{titleVal | titleCase }}</div>
  `,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  titleVal = '';

  constructor() { }

  ngOnInit() {
  }

}
