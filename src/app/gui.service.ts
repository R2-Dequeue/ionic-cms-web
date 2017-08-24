import { Injectable } from '@angular/core';

import * as Quill from 'quill';

@Injectable()
export class GuiService {
  public branch: any;
  public data: string = '';

  public state: any;
  private pageEditor: Quill;

  setState(state: any) {
    this.state = state;
  }

  setEditor(editor) {
    this.pageEditor = editor;
  }

  updateView(branch: any) {
    this.branch = branch;

    this.pageEditor.setContents(JSON.parse(this.branch.data));

    this.enablePage();
    this.markPagePristine();
  }

  updateModel() {
    if (typeof this.branch !== 'undefined')
      if (typeof this.branch['data'] !== 'undefined') {
        this.branch.data = JSON.stringify(this.pageEditor.getContents());
        this.branch.dataHTML = document.querySelector('#quillPageEditor .ql-editor').innerHTML;

        this.markPagePristine();
        this.state.uploadButtonDisabled = false;
      }
  }

  enablePage() {
    this.state.pageDisabled = false;
  }

  markPagePristine() {
    this.state.storeButtonDisabled = true;
  }

}
