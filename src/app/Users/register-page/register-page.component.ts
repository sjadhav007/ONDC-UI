import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from 'src/app/Services/otp-services.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  user: any = {
        NameOfSeller:'',
        NameOfCompany:'',
        email:'',
        phone:'',
       
  };

  otp: string= '';

  registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  private otpService: OtpService // Inject the OtpService
  ) {
    this.registrationForm = this.formBuilder.group({
      NameOfSeller: ['', Validators.required],
      NameOfCompany: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w[a-z]{1,2})+$/)],
      ],
      phone: [
        '',
        [Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      ],
      otp: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
    });
  }



  getOtp(phone: string) {
    // Implement OTP sending logic here (e.g., using a service or API).
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission here (e.g., send data to a server).
      console.log(this.user);
    }
  }

  resetForm() {
    this.user = {};
    this.otp = "";
    this.registrationForm.reset();
  }

  resendOtp() {
    // Implement OTP resending logic here using the otpService.
    // Assuming you have a method in OtpService called sendOtp.
    this.otpService.sendOtp(this.user.phone).subscribe(
      (otp: string) => {
        // Handle success, you can display a message or perform any action.
        console.log('OTP Resent: ' + otp);
      },
      (error) => {
        // Handle error, you can display an error message.
        console.error('Failed to resend OTP: ' + error);
      }
    );
  }
}

  // registrationForm:FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.registrationForm = this.formBuilder.group({
  //     NameOfSeller:['', Validators.required],
  //     NameOfCompany:['',Validators.required],
  //     email:['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w[a-z]{1,2})+$/)]],
  //     phone:['',Validators.required, Validators.maxLength(10), Validators.minLength(10)]
  //   })
  //  }

  // ngOnInit(): void {
    
  // }

  // get f() { return this.registrationForm.controls; }
  // public hide: boolean = true;
  
  // myFunction() {
  //     this.hide = !this.hide;
  // }

  // register(){
   
  // }

