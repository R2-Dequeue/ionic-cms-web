import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.html',
  styleUrls: ['./tree-view.css']
})
export class TreeViewComponent {

  @Input()
  tree;
  titleBarVisibility: string = 'none';

  isPage() {
    return typeof this.tree['data'] !== 'undefined';
  }

  isNotAPage() {
    return typeof this.tree['data'] === 'undefined';
  }

  addSection() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];
    
    this.tree.items.push({ title: 'A Section', items: []});
  }

  addPage() {
    if (typeof this.tree['items'] === 'undefined')
      this.tree['items'] = [];

    this.tree.items.push({ title: 'Some Drug', data: 'life-saving medical information' });
  }

}
