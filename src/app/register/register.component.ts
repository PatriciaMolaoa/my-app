import { Component, OnInit } from '@angular/core';

import{FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  createForm() {
    this.form = this.formBuilder.group({
      name:[null, Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
