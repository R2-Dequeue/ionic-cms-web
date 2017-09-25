import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { EditorComponent } from './app/editor/editor.component';
import { TreeViewComponent } from './app/tree-view/tree-view.component';

import { GuiService } from './services/gui/gui.service';

import { firebaseConfig } from '../app/authenticate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [GuiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
