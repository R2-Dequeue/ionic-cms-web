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

  constructor(private guiService: GuiService) {}

  isAPage() {
    return typeof this.tree['data'] !== 'undefined';
  }

  isNotAPage() {
    return typeof this.tree['data'] === 'undefined';
  }

  isASection() { return this.isNotAPage(); }

  addSection() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    let response = prompt('Please enter a non-empty name for this section:');

    if (response !== null && response !== '')
      this.tree.items.push({ title: response.trim(), items: []});
  }

  addPage() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    let response = prompt('Please enter a non-empty name for this page:');

    if (response !== null && response !== '')
      this.tree.items.push({ title: response.trim(), data: '"The world is but a canvas to the imagination."' });
  }
  
  fillPageData() {
    if (this.isAPage())
      this.guiService.populateView(this.tree);
  }

  saveData() {
    this.guiService.updateModel();
  }

  /**
   * Field a modal dialog to edit the title of a Section or Page.
   * 
   * @todo *Possibly* escape string html characters.
   */
  editTitle() {
    let response = prompt('Please enter a new name:', this.tree['title']);

    if (response !== null && response !== '')
      this.tree['title'] = response.trim();
  }

  /**
   * Delete a Page or a Section and all it's children.
   */
  deleteNode() {
    if (confirm('Are you certain you want to delete "' + this.tree['title'] + '" and everything it contains?') === true) {
      ;
    }
  }

}
