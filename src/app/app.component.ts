import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  items: number[] = [1, 2, 3, 4];
  counter: number = 5;

  push() {
    this.items.push(this.counter);
    this.counter += 1;
  }

  pop() {
    this.items.pop();
  }

  document = {
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
            title: 'Section 2',
            items: []
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
