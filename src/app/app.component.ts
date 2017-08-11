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

  documentRoot: any = {
    title: 'Pharmacopeia',
    items: [
      {
        title: 'Analgesics',
        items: [
          {
            title: 'Acetaminophen',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Clonidine',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Fentanyl',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Ibuprofen',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Ketorolac',
            data: 'hsanehuanosuh'
          }
        ]
      },
      {
        title: 'Sedatives',
        items: [
          {
            title: 'Dexmedetomidine',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Diazepam',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Etomidate',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Ketamine',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Lorazepam',
            data: 'hsanehuanosuh'
          }
        ]
      },
      {
        title: 'Local Anesthetics',
        items: [
          {
            title: 'Bupivacaine',
            data: 'hsanehuanosuh'
          },
          {
            title: 'Lidocaine',
            data: 'hsanehuanosuh'
          }
        ]
      }
    ]
  };
}
