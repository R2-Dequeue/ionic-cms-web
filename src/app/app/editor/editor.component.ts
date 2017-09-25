import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import * as Quill from 'quill';

import { GuiService } from '../../services/gui/gui.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public readonly debugComponent: boolean = !environment.production;
  documentRoot: any = null;
  state: any = {
    uploadButtonDisabled: true,
    pageDisabled: true,
    storeButtonDisabled: true
  };

  objectObservable: FirebaseObjectObservable<any>;
  documentsObservable: FirebaseListObservable<any>;
  private pageEditor: Quill;

  /**
   * @todo Add error handling to `.once` call.
   * @param db 
   * @param guiService 
   */
  constructor(private db: AngularFireDatabase, public guiService: GuiService) {
    console.log('EditorComponent constructed');
    this.objectObservable = db.object('/documents/pharmacopeia');
    this.objectObservable.$ref.once('value', snapshot => {
      if (snapshot.val())
        this.documentRoot = snapshot.val();
      else
        this.documentRoot = { title: 'New Document', items: [] };
    });

    guiService.setState(this.state);
  }

  ngAfterViewInit() {
    // ql-toolbar, ql-container

    let toolbarOptions = [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'script': 'super'}, { 'script': 'sub' }],      // superscript/subscript
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'bullet'}, { 'list': 'ordered' }],
      ['blockquote'/*, 'code-block'*/],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      //[{ 'direction': 'rtl' }],                         // text direction
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']                                         // remove formatting button
    ];
    this.pageEditor = new Quill('#quillPageEditor', { modules: { toolbar: toolbarOptions }, theme: 'snow' });
    this.guiService.setEditor(this.pageEditor);
    this.pageEditor.on('text-change', () => {
      this.guiService.markTextDirty();

      document.getElementById('quillHTML').innerHTML = document.querySelector('#quillPageEditor .ql-editor').innerHTML;
    });
  }

  upload() {
    this.objectObservable.set(this.documentRoot);
    this.state.uploadButtonDisabled = true;
  }

  logDocument() {
    console.log(this.documentRoot);
  }

  ngOnInit() {
  }
}
