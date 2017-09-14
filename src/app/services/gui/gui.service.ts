import { Injectable } from '@angular/core';

import * as Quill from 'quill';

@Injectable()
export class GuiService {
  public branch: any;
  public data: string = '';

  public state: any;
  
  private pageEditor: Quill;

  private treeDirtyBit: boolean = false;
  private textDirtyBit: boolean = false;

  public markTreeDirty() {
    this.treeDirtyBit = true;
    this.state.uploadButtonDisabled = true;
  }
  public markTextDirty() {
    this.textDirtyBit = true;
    this.state.uploadButtonDisabled = true;
    this.state.storeButtonDisabled = false;
  }

  public markTreePristine() {
    this.treeDirtyBit = false;
    this.state.uploadButtonDisabled = false;
  }
  public markTextPristine() {
    this.textDirtyBit = false;
    this.state.storeButtonDisabled = false;
  }

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
        // Do this correctly
        this.branch.dataHTML = document.querySelector('#quillPageEditor .ql-editor').innerHTML;

        this.markTextPristine();
      }
  }

  enablePage() {
    this.state.pageDisabled = false;
  }

  markPagePristine() {
    this.state.storeButtonDisabled = true;
  }

}
