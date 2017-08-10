import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';

  constructor() {
    //this.documentRoot = { title: '', items: [] };
  }

  documentRoot:any = {
    title: 'A book',
    items: [
      {
        title: 'Chapter 1',
        items: [
          {
            title: 'Section 1',
            items: []
          },
          {
            title: 'Section 2',
            items: []
          },
          {
            title: 'Section 3',
            items: []
          }
        ]
      },
      {
        title: 'Chapter 2',
        items: [
          {
            title: 'Section 1',
            items: []
          },
          {
            title: 'Mr. Snuffleupagus',
            data: 'hsanehuanosuh'
          }
        ]
      },
      {
        title: 'Chapter 3',
        items: [
          {
            title: 'Section 1',
            items: []
          }
        ]
      }
    ]
  };
}
