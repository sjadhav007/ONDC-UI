import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showTab: number =1;
  constructor(private router:Router){
    
  }
  addProduct(){
    this.router.navigate(['/dashboard/addProduct'])
  }
  dashboard() {
    this.showTab = 1; 
  } 
  productManagement() { 
    this.showTab = 2; 
  } 
  orderManagement() {

   } 
  salesTrackingAndReports() {

   } 
  inventoryManagememnt() { 

  } 
  customerInteractions() { 

  } 
  paymentCollection() { 

  } 
  vendorMarketPlace() {

   } 
  promotions() {

   }
}
