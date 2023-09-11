import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w[a-z]{1,2})+$/)]],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

  get f() { return this.loginForm.controls; }
  public hide: boolean = true;
  
  myFunction() {
      this.hide = !this.hide;
  }
  login(){
   
  }
}
