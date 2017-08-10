import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.html',
  styleUrls: ['./tree-view.css']
})
export class TreeViewComponent {

  @Input()
  tree;

  hasItems() {
    return typeof this.tree['items'] !== 'undefined' && this.tree.items.length > 0;
  }

  hasData() {
    return typeof this.tree['data'] !== 'undefined';
  }

  doesNotHaveItems() {
    return typeof this.tree['items'] === 'undefined' || this.tree.items.length === 0;
  }

  doesNotHaveData() {
    return typeof this.tree['data'] === 'undefined';
  }

  addItem(name) {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];
    
    this.tree.items.push({ title: name, items: []});
  }

  addData(name, info) {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    this.tree.items.push({ title: name, data: info });
  }

}
