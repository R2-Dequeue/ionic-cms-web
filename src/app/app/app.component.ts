import { Component } from '@angular/core';

import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userIsAuthenticated: Boolean = false;
}
