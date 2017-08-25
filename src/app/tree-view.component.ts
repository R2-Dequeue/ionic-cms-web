import { Component, Input } from '@angular/core';

import * as Quill from 'quill';

import { GuiService } from './gui.service';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.html',
  styleUrls: ['./tree-view.css']
})
export class TreeViewComponent {

  @Input()
  parent: any;
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

    if (response !== null && response !== '') {
      this.tree.items.push({ title: response.trim(), items: []});

      if (this.guiService.state.storeButtonDisabled === true)
        this.guiService.state.uploadButtonDisabled = false;
    }
  }

  addPage() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    let response = prompt('Please enter a non-empty name for this page:');

    if (response !== null && response !== '') {
      this.tree.items.push({ title: response.trim(), data: null, dataHTML: '' });

      if (this.guiService.state.storeButtonDisabled === true)
        this.guiService.state.uploadButtonDisabled = false;
    }
  }
  
  fillPageData() {
    if (this.isAPage())
      this.guiService.updateView(this.tree);
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

    // disable/enable form elements
  }

  /**
   * Delete a Page or a Section and all it's children.
   */
  deleteNode() {
    if (this.parent)
      if (confirm('Are you certain you want to delete "' + this.tree['title'] + '" and everything it contains?') === true) {
        for (let i = 0; i < this.parent.items.length; ++i) {
          if (this.parent.items[i] === this.tree) {
            this.parent.items.splice(i, 1);
            break;
          }
        }
      }

    // disable/enable form elements
  }

  isNotFirst() {
    if (this.parent && this.parent['items'] && this.parent.items.length >= 1)
      if (this.parent.items[0] !== this.tree)
        return true;

    return false;
  }

  isNotLast() {
    if (this.parent && this.parent['items'] && this.parent.items.length >= 1)
      if (this.parent.items[this.parent.items.length - 1] !== this.tree)
        return true;

    return false;
  }

  moveNode(offset: number) {
    if (this.parent && this.parent['items'] && this.parent.items.length >= 1)
      for (let i = 0; i < this.parent.items.length; ++i) {
        if (this.parent.items[i] === this.tree) {
          let original = this.parent.items[i];
          this.parent.items[i] = this.parent.items[i + offset];
          this.parent.items[i + offset] = original;

          break;
        }
      }
  }

}
