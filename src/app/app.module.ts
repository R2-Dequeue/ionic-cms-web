import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view.component';

import { GuiService } from './gui.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GuiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
