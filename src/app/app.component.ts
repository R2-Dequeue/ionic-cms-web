import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { GuiService } from './gui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  documentRoot: any = { title: 'Loading...', items: [] };
  objectObservable: FirebaseObjectObservable<any>;
  documentsObservable: FirebaseListObservable<any>;
  state: any = {
    uploadDisabled: false,
    pageDisabled: true,
    submitPageDisabled: true
  };

  /**
   * @todo Add error handling to `.once` call.
   * @param db 
   * @param guiService 
   */
  constructor(db: AngularFireDatabase, private guiService: GuiService) {
    this.objectObservable = db.object('/pharmacopeia');
    this.objectObservable.$ref.once('value', snapshot => this.documentRoot = snapshot.val());

    guiService.setState(this.state);
  }

  upload() {
    this.objectObservable.set(this.documentRoot);
  }

  logDocument() {
    console.log(this.documentRoot);
  }
}
