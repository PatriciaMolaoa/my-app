import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {
    @Component({
      selector: 'form-field-overview-example',
      templateUrl: 'form.component.html',
      styleUrls: ['form-field-overview-example.css']
    })

    @Component({

    })

      const  = new FormControl('', [
        Validators.required,
        Validators.email,
      ])
   title = 'my-app';
  }

