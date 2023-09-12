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
    this.showTab = 3; 
   } 
  salesTrackingAndReports() {
    this.showTab = 4; 
   } 
  inventoryManagememnt() { 
    this.showTab = 5; 
  } 
  customerInteractions() { 
    this.showTab = 6;
  } 
  paymentCollection() { 
    this.showTab = 7;
  } 
  vendorMarketPlace() {
    this.showTab = 8;
   } 
  promotions() {
    this.showTab = 9;
   }

   notifications(){
    this.router.navigate(['/'])
   }
}
