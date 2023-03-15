import { Component, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  elms!: QueryList<any>;
  detectedElms: any = [];
  contents = [
    'overview',
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
  ];
}
