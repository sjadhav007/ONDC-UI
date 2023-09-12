import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showTab: number =1;
  addProduct(){
    
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
