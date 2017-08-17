import { Injectable } from '@angular/core';

@Injectable()
export class GuiService {

  constructor() { }

  public branch: any;
  public title: string = '';
  public data: string = '';

  populateView(branch: any) {
    this.branch = branch;

    //this.title = this.branch.title;
    this.data = this.branch.data;
  }

  updateModel() {
    if (typeof this.branch !== 'undefined') {
      //this.branch.title = this.title;

      if (typeof this.branch['data'] !== 'undefined')
        this.branch.data = this.data;
    }
  }

}
