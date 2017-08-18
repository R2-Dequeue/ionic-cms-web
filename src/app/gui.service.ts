import { Injectable } from '@angular/core';

@Injectable()
export class GuiService {

  constructor() { }

  public branch: any;
  public title: string = '';
  public data: string = '';

  private state: any;

  setState(state: any) {
    this.state = state;
  }

  populateView(branch: any) {
    this.branch = branch;

    this.data = this.branch.data;
    this.enablePage();
    this.markPagePristine();
  }

  updateModel() {
    if (typeof this.branch !== 'undefined') {
      if (typeof this.branch['data'] !== 'undefined') {
        this.branch.data = this.data;
        this.markPagePristine();
      }
    }
  }

  enablePage() {
    this.state.pageDisabled = false;
    this.state.submitPageDisabled = false;
  }

  markPagePristine() {
    //this.state.submitPageDisabled = true;
  }

}
