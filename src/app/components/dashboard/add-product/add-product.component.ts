import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
 addProductForm:FormGroup;
 todayDate=moment(new Date()).format('DD/MM/YYYY');
 imageArray :any= [];


 constructor(private fb:FormBuilder){
  this.addProductForm=this.fb.group({
    productId:['',Validators.required],
    MRP:['',Validators.required],
    productName:['',Validators.required],
    salePrice:['',Validators.required],
    productCategory:['',Validators.required],
    units:['',Validators.required],
    status:['live',Validators.required],
    discount:['',Validators.required],
    creationDate:[this.todayDate,Validators.required]

  });

//   const fileInput = document.getElementById('file-input');

//   if (fileInput) {
//     fileInput.addEventListener('click', function() {
//           // Trigger the file input click event when the link is clicked
//           fileInput.click();
//       });   
//  }
 
}
 ngOnInit() {
   
 }

 fileUpload(event:any){
  debugger
  let files = event.target.files;
  let file;
  for (let i=0; i<files.length ; i++){
    let reader = new FileReader();
      file = files [i];
      reader.onload = (file) => {
        let base64data = reader.result;
          if(base64data){
            this.imageArray[i] = reader.result;
          }
      }
      reader.readAsDataURL(file);
    }
 }

 get p() {
  return this.addProductForm.controls;
}

numberOnly(event: any) {
  if (event.target.value.length === 0 && event.key === '0') {
    event.preventDefault();

  }
  if (event.key == "-") {
    event.preventDefault();
  }
  if (event.key == "+") {
    event.preventDefault();
  }
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

}
