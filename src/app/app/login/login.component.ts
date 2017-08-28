import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: any;
  password: any;

  onSubmit() {
    console.log(this.email + ', ' + this.password);
  }

}
