import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
