import { Component, Input } from '@angular/core';

import { GuiService } from './gui.service';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.html',
  styleUrls: ['./tree-view.css']
})
export class TreeViewComponent {

  @Input()
  tree: any;
  titleBarVisibility: string = 'none';

  constructor(private guiService: GuiService) {
  }

  isAPage() {
    return typeof this.tree['data'] !== 'undefined';
  }

  isNotAPage() {
    return typeof this.tree['data'] === 'undefined';
  }

  addSection() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];
    
    this.tree.items.push({ title: 'A New Section', items: []});
  }

  addPage() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    this.tree.items.push({ title: 'A New Page', data: 'Detailed medical information' });
  }
  
  fillTextarea() {
    this.guiService.populateView(this.tree);
  }

  saveData() {
    this.guiService.updateModel();
  }

  /**
   * Field a modal dialog to edit the title of a Section or Page.
   */
  editTitle() {
  }

  /**
   * Delete a Page or a Section and all it's children.
   */
  deleteNode() {
    // "Are you certain you want to delete \"Page Name\"?"
    // "Are you certain you want to delete \"Section Name\" and all its contents?"
  }

}
